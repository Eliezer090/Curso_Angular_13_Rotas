import { BookAuthorsComponent } from './book/book-authors/book-authors.component';
import { BookDetailComponent } from './book/book-detail/book-detail.component';
import { DvdFormComponent } from './dvd/dvd-form/dvd-form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DvdComponent } from './dvd/dvd.component';
import { BookComponent } from './book/book.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { Routes, RouterModule } from '@Angular/router';
import { DvdDetailComponent } from './dvd/dvd-detail/dvd-detail.component';
/**
 Precisemos ter cuidado com a ordem das rotas pois no caso:
 - dvds/new
 - dvds/:index
  Se colocar o que contem o index antes ele tenta acessar esse do index,
    entao esse com parametro precisa ser o ultimo.
 */
const appRoutes: Routes = [
  { path: 'dvds', component: DvdComponent },
  { path: 'dvds/new', component: DvdFormComponent },
  { path: 'dvds/:index', component: DvdDetailComponent },
  {
    path: 'books',
    component: BookComponent,
    children: [
      {
        path: ':index', component: BookDetailComponent,
        children: [
          { path: 'authors', component: BookAuthorsComponent }
        ]
      },
    ]
  },
  //redirectTo redireciona o cara para uma pagina especificada
  { path: '', pathMatch: 'full', redirectTo: 'dvds' },
  { path: '**', component: PageNotFoundComponent },

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
