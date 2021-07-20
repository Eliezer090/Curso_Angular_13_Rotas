import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, timer } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { Dvd } from '../models/dvd';

@Injectable({
  providedIn: 'root'
})
export class DvdService {
  private dvdSubject: BehaviorSubject<Dvd[]> = new BehaviorSubject<Dvd[]>([]);

  public dvdsObs = this.dvdSubject.asObservable();
  constructor() { 
    timer(2000).subscribe(() => {
      this.dvdSubject.next([
        { title: "Book 1", year: 200, genre: "Music" },
        { title: "Book 2", year: 20, genre: "movie" },
        { title: "Book 3", year: 30, genre: "clip" },
        { title: "Book 4", year: 400, genre: "gender1" },
        { title: "Book 5", year: 600, genre: "gender2" },
      ])
    })
  }
  add(b:Dvd){
    this.dvdSubject.getValue().push(b);
    
  }

  remove(i:number){
    let dvds = this.dvdSubject.getValue();
    if (i>=0 && i<dvds.length)
      dvds.splice(i,1);
  }

  get(i:number):Observable<Dvd>{
    let x: any = null;
    return this.dvdsObs.pipe(
      map(dvds => (i>=0 && i<dvds.length) ? dvds[i] : x),
      delay(1000)
    )
  }
}
