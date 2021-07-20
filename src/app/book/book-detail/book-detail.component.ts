import { Observable } from 'rxjs';
import { BookService } from './../../services/book.service';
import { ActivatedRoute, ParamMap, Router } from '@Angular/router';
import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  book$: Observable<Book> = new Observable;
  index: number | undefined;
  authors: string[] = [];

  constructor(
    private route: ActivatedRoute,
    private BookService: BookService,
    private router: Router
  ) { }

  ngOnInit(): void {
    //Ta certo fazer isso para quando abrir a tela ele verificar se tem index aqui
    let indexString: string = this.route.snapshot.paramMap.get('index')!;
    if (indexString != null && indexString.trim() != '' ) {
      this.book$ = this.route.paramMap.pipe(
        tap((parms:ParamMap)=>this.index = +parms.get('index')!),
        switchMap((params: ParamMap) => this.BookService.get((params.get('index') != '') ? +params.get('index')! : 99999999)),
        tap((b)=>  this.authors = (b) ? b.authors:[])
      )
    }
    /*
    Fazer dessa maneira nao e da melhor pois com subscribe precisamos nos desisncrever  da maneira de cima ele faz sozinho ao fechar a tela
    this.route.paramMap.subscribe((param: ParamMap) => {
      let indexString: string = param.get('index')!;
      if (indexString.trim() != null && indexString.trim() != '') {
        let index: number = +indexString!;
        if (index >= 0)
          this.book$ = this.BookService.get(index);
      }
    })*/
  }

  remove(){
    this.BookService.remove(this.index!);
    this.router.navigateByUrl('books')
  }

  goAuthors(){
    let url = '/books/'+this.index+'/authors'
    this.router.navigate([url,{authors: this.authors}])
  }

}
