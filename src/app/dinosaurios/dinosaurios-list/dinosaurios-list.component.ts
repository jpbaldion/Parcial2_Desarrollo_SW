import { Component, OnInit } from '@angular/core';
import { Dinosaurio } from '../dinosaurio';
import { DinosauriosService } from '../dinosaurios.service';

@Component({
  selector: 'app-dinosaurios-list',
  templateUrl: './dinosaurios-list.component.html',
  styleUrls: ['./dinosaurios-list.component.css']
})
export class DinosauriosListComponent implements OnInit {

  selectedDino!: Dinosaurio;
  selected = false;

  nCarnivoro:number = 0;
  nHerbivoro: number = 0;

  dinosaurios: Array<Dinosaurio> = [];
  constructor(private dinonsauriosService: DinosauriosService) { }

  onSelected(dinosaurio: Dinosaurio): void {
    this.selected = true;
    this.selectedDino = dinosaurio;
  }

  getDinos(): void{
    this.dinonsauriosService.getDinos().subscribe((dinosaurios) => {
      this.dinosaurios = dinosaurios;
      dinosaurios.forEach((dino) =>{
        if (dino.feeding === "Herbivoro"){
          this.nHerbivoro += 1;
        }else if (dino.feeding === "Carnivoro"){
          this.nCarnivoro += 1
        }
      });
    });
  }

  ngOnInit() {
    this.getDinos();
  }

}
