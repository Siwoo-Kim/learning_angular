import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FilterPipe} from "../filter.pipe";
import {TemperaturePipe} from "../temperature.pipe";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FilterPipe,TemperaturePipe],
  exports: [FilterPipe,TemperaturePipe]
})
export class PipeModule { }
