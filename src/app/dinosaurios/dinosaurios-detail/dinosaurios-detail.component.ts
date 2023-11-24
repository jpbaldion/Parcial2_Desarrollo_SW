import { Component, OnInit, Input } from '@angular/core';
import { Dinosaurio } from '../dinosaurio';
@Component({
  selector: 'app-dinosaurios-detail',
  templateUrl: './dinosaurios-detail.component.html',
  styleUrls: ['./dinosaurios-detail.component.css']
})
export class DinosauriosDetailComponent implements OnInit {

  @Input() dinoDetail!: Dinosaurio;
  constructor() { }

  ngOnInit() {
  }

}
