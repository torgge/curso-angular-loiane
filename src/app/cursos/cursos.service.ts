import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  private cursos = [];

  constructor () {
    this.cursos = ["JAVA", "DELPHI", "PHP"];
  }

  getCursos () {
    return this.cursos;
  }
}
