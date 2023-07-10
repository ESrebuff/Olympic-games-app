import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { Olympic } from '../models/Olympic';
import { Router } from '@angular/router';
import { ErrorHttpService } from './errorHttp.service';

@Injectable({
  providedIn: 'root',
})
export class OlympicService {
  private olympicUrl = './assets/mock/olympic.json';
  private olympics$ = new BehaviorSubject<Olympic[] | null>(null);

  constructor(private http: HttpClient, private router: Router, private errorHttpService: ErrorHttpService) {}

  loadInitialData(): Observable<Olympic[]>{
    return this.http.get<Olympic[]>(this.olympicUrl).pipe(
      tap((value) => this.olympics$.next(value)),
      catchError((error) => {
        console.error(error);
        this.olympics$.next(null);
        this.errorHttpService.setErrorHttp(error);
        this.router.navigate(['/not-found']);
        return throwError('Something went wrong, an error occurred while loading Olympic data');
      })
    );
  }

  getOlympics(): Observable<Olympic[] | null> {
    return this.olympics$.asObservable();
  }

  getOlympicById(olympicId: number): Observable<Olympic | null> {
    return this.olympics$.pipe(
      map((olympics) => {
        if (olympics) {
          return olympics.find((o) => o.id === olympicId) || null;
        }
        return null;
      })
    );
  }
}
