import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@Angular/router'
import { Observable } from 'rxjs';
import { Dvd } from 'src/app/models/dvd';
import { DvdService } from 'src/app/services/dvd.service';

@Component({
  selector: 'app-dvd-detail',
  templateUrl: './dvd-detail.component.html',
  styleUrls: ['./dvd-detail.component.css']
})
export class DvdDetailComponent implements OnInit {

  dvdObs: Observable<Dvd> = new Observable;
  title = '';
  constructor(
    private route: ActivatedRoute,
    private dvdService: DvdService,
    private router: Router
  ) { }

  ngOnInit(): void {
    /**
     * O + e para converter a string para inteiro, e o ! server para o null
     */
    let index: number = +this.route.snapshot.paramMap.get('index')!;
    this.dvdObs = this.dvdService.get(index);
    this.route.paramMap.subscribe((parm: ParamMap) => {
      if (parm.has('title')) {
        this.title = parm.get('title')!;
      }
    })
    //console.log("Index: ", this.route.snapshot.paramMap.get('index'));
    //this.route.paramMap.subscribe((params: ParamMap)=>console.log(params.get('index')));
  }

  goBack() {
    this.router.navigate(['/dvds']);
  }
}
