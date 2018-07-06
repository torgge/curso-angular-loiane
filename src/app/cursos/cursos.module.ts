///<reference path="curso-detalhe/curso-detalhe.component.ts"/>
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CursosComponent} from './cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import {CursosService} from "./cursos.service";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CursosComponent,
    CursoDetalheComponent
  ],
  exports: [
    CursosComponent,
    CursoDetalheComponent
  ],
  providers: [
    CursosService
  ]
})
export class CursosModule {
}
