import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ShowElement } from '../../ShowElement';
import { ShowsService } from '../../shows.service';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldControl, MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
  imports: [MatTableModule, MatFormFieldModule, CommonModule, MatButtonToggleModule, FormsModule, MatInputModule]
})

export class MoviesComponent implements OnInit {

  media: ShowElement[] = [];

  constructor( private showsService: ShowsService ) { }

  displayedColumns: string[] = ['position', 'name', 'genre', 'source', 'cost', 'type', 'rating', 'date'];
  dataSource = new MatTableDataSource<ShowElement>();

  ngOnInit(): void {
    this.getAllMedia();
  }

  getAllMedia(): void {
    this.showsService.getAllMedia()
    .subscribe(media => this.dataSource = new MatTableDataSource(media));
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}