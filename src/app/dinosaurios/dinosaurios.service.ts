import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Dinosaurio } from './dinosaurio';
@Injectable({
  providedIn: 'root'
})
export class DinosauriosService {
  private apiUrl: string = environment.baseUrl + 'dinosaurs.json';

  constructor(private http: HttpClient) { }

  getDinos(): Observable<Dinosaurio[]>{
    return this.http.get<Dinosaurio[]>(this.apiUrl);
  }
}
