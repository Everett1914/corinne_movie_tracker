import { Component, OnInit } from '@angular/core';
import { ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import { ShowElement } from '../../ShowElement';
import { ShowsService } from '../../shows.service';
import { FormsModule } from '@angular/forms';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

@Component({
  selector: 'app-dashboard',
  imports: [FormsModule, MatButtonToggleModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  media: ShowElement[] = [];

  constructor( private showsService: ShowsService ) { }

  ngOnInit(): void {
  }
  
  onClickSubmit(data: any) {
      console.log(data)
      this.showsService.addMedia({name:data.name, genre:data.genre, source:data.source, cost:Number(data.cost), type:data.type, rating:data.rating} as ShowElement)
        .subscribe(media => {
          this.media.push(media);
        });
  }
}
