import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../models/book';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  books: Observable<Book[]> = new Observable;

  constructor(private BookService: BookService) { }

  ngOnInit(): void {
    this.books = this.BookService.booksObs;
  }

}
