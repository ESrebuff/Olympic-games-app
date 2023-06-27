import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Olympic } from 'src/app/core/models/Olympic';
import { OlympicService } from 'src/app/core/services/olympic.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  public olympic$!: Observable<Olympic | null> ;

  constructor(
    private olympicService: OlympicService,
    private route: ActivatedRoute
    ) {}

  ngOnInit(): void {
    const olympicId = +this.route.snapshot.params['id'];
    this.olympic$ = this.olympicService.getOlympicById(olympicId);
  }

}
