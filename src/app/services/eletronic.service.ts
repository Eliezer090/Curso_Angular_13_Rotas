import { BehaviorSubject, timer, Observable } from 'rxjs';
import { Electronic } from './../models/electronic';
import { Injectable } from '@angular/core';
import { map, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EletronicService {
  private eletronicSubject: BehaviorSubject<Electronic[]> = new BehaviorSubject<Electronic[]>([]);
  public eletronicObs = this.eletronicSubject.asObservable();


  constructor() {
    timer(1000).subscribe(()=>{
      this.eletronicSubject.next([
        {name: "name 1", brand:"base 1", price: 200, description:"desc 1"},
        {name: "name 2", brand:"base 2", price: 300, description:"desc 2"},
        {name: "name 3", brand:"base 3", price: 400, description:"desc 3"},
        {name: "name 4", brand:"base 4", price: 500, description:"desc 4"},
        {name: "name 5", brand:"base 5", price: 600, description:"desc 5"},
      ])
    })
   }

   add(b:Electronic){
    this.eletronicSubject.getValue().push(b);

  }

  remove(i:number){
    let dvds = this.eletronicSubject.getValue();
    if (i>=0 && i<dvds.length)
      dvds.splice(i,1);
  }

  get(i:number):Observable<Electronic>{
    let x: any = null;
    return this.eletronicObs.pipe(
      map(eletronics => (i>=0 && i<eletronics.length) ? eletronics[i] : x),
      delay(1000)
    )
  }

}
