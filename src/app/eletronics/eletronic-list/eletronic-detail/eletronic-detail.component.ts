import { ActivatedRoute, Router } from '@Angular/router';
import { EletronicService } from './../../../services/eletronic.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Electronic } from 'src/app/models/electronic';

@Component({
  selector: 'app-eletronic-detail',
  templateUrl: './eletronic-detail.component.html',
  styleUrls: ['./eletronic-detail.component.css']
})
export class EletronicDetailComponent implements OnInit {

  electronic$:Observable<Electronic> = new Observable;

  constructor(
    private EletronicService: EletronicService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    let i: number = +this.route.snapshot.paramMap.get('index')!;
    this.electronic$ = this.EletronicService.get(i);
  }

  back(){
    this.router.navigate(['..',{relativeTo: this.route}])
  }

}
