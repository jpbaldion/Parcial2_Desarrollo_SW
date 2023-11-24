import { Component, OnInit } from '@angular/core';
import { Dinosaurio } from '../dinosaurio';
import { DinosauriosService } from '../dinosaurios.service';

@Component({
  selector: 'app-dinosaurios-list',
  templateUrl: './dinosaurios-list.component.html',
  styleUrls: ['./dinosaurios-list.component.css']
})
export class DinosauriosListComponent implements OnInit {

  dinosaurios: Array<Dinosaurio> = [];
  constructor(private dinonsauriosService: DinosauriosService) { }

  getDinos(): void{
    this.dinonsauriosService.getDinos().subscribe((dinosaurios) => {
      this.dinosaurios = dinosaurios;
    });
  }

  ngOnInit() {
    this.getDinos();
  }

}
