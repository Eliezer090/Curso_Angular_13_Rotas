import { EletronicService } from './../../services/eletronic.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Electronic } from 'src/app/models/electronic';

@Component({
  selector: 'app-eletronic-list',
  templateUrl: './eletronic-list.component.html',
  styleUrls: ['./eletronic-list.component.css']
})
export class EletronicListComponent implements OnInit {

  electronics$:Observable<Electronic[]> = new Observable;

  constructor(
    private EletronicService: EletronicService
  ) { }

  ngOnInit(): void {
    this.electronics$ = this.EletronicService.eletronicObs;
  }


}
