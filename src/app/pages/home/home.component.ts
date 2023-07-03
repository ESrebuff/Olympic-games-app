import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HeaderData } from 'src/app/core/models/HeaderData';
import { Olympic } from 'src/app/core/models/Olympic';
import { OlympicService } from 'src/app/core/services/olympic.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public olympics$: Observable<Olympic[] | null> = of(null);
  public headerData!: HeaderData[];

  constructor(private olympicService: OlympicService) {}

  ngOnInit(): void {
    this.olympics$ = this.olympicService.getOlympics();
    this.olympics$.subscribe((olympics) => {
      this.headerData = [
        {
          name: 'Number of JOs',
          number: [
            ...new Set(
              olympics!.flatMap((be) => be.participations.map((se) => se.year))
            ),
          ].length,
        },
        {
          name: 'Number of countries',
          number: olympics!.map((elt) => elt.country).length,
        },
      ];
    });
  }
}
