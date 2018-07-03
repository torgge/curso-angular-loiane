import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor() { }

  getCuros() { return [`Java`, `Angular`, `Delphi`];}
}
