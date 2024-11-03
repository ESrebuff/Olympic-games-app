import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Olympic } from 'src/app/core/models/Olympic';
import { OlympicService } from 'src/app/core/services/olympic.service';
import { Observable, take } from 'rxjs';
import { HeaderData } from 'src/app/core/models/HeaderData';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  public olympic$!: Observable<Olympic | null>;
  public headerData!: HeaderData[];
  public title!: string;
  private hasValue = false;

  constructor(
    private olympicService: OlympicService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const olympicId = +this.route.snapshot.params['id'];
    this.olympic$ = this.olympicService.getOlympicById(olympicId);
    this.olympic$.pipe(take(2)).subscribe((olympic) => {
      if (olympic === null && this.hasValue) {
        this.router.navigateByUrl('/not-found');
      } else {
        this.title = olympic!.country;
        this.hasValue = true;
        this.headerData = [
          {
            name: 'Number of entries',
            number: olympic?.participations.length!,
          },
          {
            name: 'Total number medals',
            number: olympic?.participations
              .map((p) => p.medalsCount)
              .reduce(
                (accumulator, currentValue) => accumulator + currentValue,
                0
              )!,
          },
          {
            name: 'Total number of athletes',
            number: olympic?.participations
              .map((p) => p.athleteCount)
              .reduce(
                (accumulator, currentValue) => accumulator + currentValue,
                0
              )!,
          },
        ];
      }
    });
  }
}
