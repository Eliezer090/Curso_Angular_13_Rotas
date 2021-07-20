import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, timer } from 'rxjs';
import { Book } from '../models/book';
import { delay, map } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class BookService {

  private bookSubject: BehaviorSubject<Book[]> = new BehaviorSubject<Book[]>([]);

  public booksObs = this.bookSubject.asObservable();

  constructor() {
    timer(2000).subscribe(() => {
      this.bookSubject.next([
        { title: "Book 1", pages: 200, authors: ["john", "nicole"] },
        { title: "Book 2", pages: 20, authors: ["author1"] },
        { title: "Book 3", pages: 30, authors: ["author2", "author13", "author4"] },
        { title: "Book 4", pages: 400, authors: ["john222", "author5"] },
        { title: "Book 5", pages: 600, authors: ["6", "author9"] },
      ])
    })
  }

  add(b:Book){
    this.bookSubject.getValue().push(b);
    
  }

  remove(i:number){
    let books = this.bookSubject.getValue();
    if (i>=0 && i<books.length)
      books.splice(i,1);
  }

  get(i:number):Observable<Book>{
    let x: any = null;
    return this.booksObs.pipe(
      map(books => (i>=0 && i<books.length) ? books[i] : x),
      delay(1000)
    )
  }


}
