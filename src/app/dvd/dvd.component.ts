import { Router } from '@Angular/router';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Dvd } from '../models/dvd';
import { DvdService } from '../services/dvd.service';

@Component({
  selector: 'app-dvd',
  templateUrl: './dvd.component.html',
  styleUrls: ['./dvd.component.css']
})
export class DvdComponent implements OnInit {

  dvds: Observable<Dvd[]> = new Observable;

  constructor(private dvdService:DvdService,
    private router: Router) { }

  ngOnInit(): void {
    this.dvds = this.dvdService.dvdsObs;
  }

  goDetails(i: number,dvd:Dvd){
    this.router.navigate([`dvds/${i}`,{title: dvd.title}])
  }

  remove(i:number){
    this.dvdService.remove(i);
  }

}
