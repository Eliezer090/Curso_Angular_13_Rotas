import { ActivatedRoute, ParamMap } from '@Angular/router';
import { Component, OnInit } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-book-authors',
  templateUrl: './book-authors.component.html',
  styleUrls: ['./book-authors.component.css']
})
export class BookAuthorsComponent implements OnInit {

  authors$: Observable<string[]> = new Observable;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.authors$ = this.route.paramMap.pipe(
      map((parms:ParamMap)=>(parms.get('authors')!= null ? parms.get('authors')!.split(',') : []))
    )
  }

}
