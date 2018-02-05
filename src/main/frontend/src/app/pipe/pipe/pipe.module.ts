import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FilterPipe} from "../filter.pipe";
import {TemperaturePipe} from "../temperature.pipe";
import {LanguageToFormatPipe} from "../language-to-format.pipe";

const pipes = [FilterPipe,TemperaturePipe,LanguageToFormatPipe];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: pipes,
  exports: pipes
})
export class PipeModule { }
