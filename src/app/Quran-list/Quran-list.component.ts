import { Component, OnInit,Input} from '@angular/core';
import { Quran } from 'Interfaces/Quran.model';
import { QuranAppServiceService } from 'Services/QuranApp-Service.service';
import { Observable } from 'rxjs/Observable';
import { Ayaaa } from 'Interfaces/ayaaa.model';
import { Navigation } from 'selenium-webdriver';
import {Router} from '@angular/router';


@Component({
  selector: 'app-Quran-list',
  templateUrl: './Quran-list.component.html',
  styleUrls: ['./Quran-list.component.css'],
  
})
export class QuranListComponent implements OnInit {
Quers : Quran[];
Soura: Quran;
 aya : Quran[];
obsQuers : Observable<Quran[]>;
  constructor(private QueranService : QuranAppServiceService, public router: Router) { }

  ngOnInit() {
    this.obsQuers= this.QueranService.getAllsura();
     this.obsQuers.subscribe(Quers => {this.Quers = Quers
      
     })
     
    

  }
  GetSoura(index : string){
  //  this.QueranService.getbyIndex(index).subscribe(aya => {this.aya = aya,
  //    console.log(aya[0].name);
  // })
    
  }

}
