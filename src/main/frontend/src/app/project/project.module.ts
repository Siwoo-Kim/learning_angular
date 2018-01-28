import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './component/carousel/carousel.component';
import { FooterComponent } from './component/footer/footer.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { ProductItemComponent } from './component/product-item/product-item.component';
import { SearchComponent } from './component/search/search.component';
import { StarsComponent } from './component/stars/stars.component';
import { ProjectStartpointComponent } from './component/project-startpoint/project-startpoint.component';
import {
  MatButtonModule, MatCardModule, MatInputModule, MatListModule, MatRadioModule, MatSnackBarModule,
  MatToolbarModule
} from "@angular/material";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { ProductDetailComponent } from './component/product-detail/product-detail.component';
import { HomeComponent } from './component/home/home.component';
import {projectRouting} from "./project.routes";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FilterPipe} from "../pipe/filter.pipe";
import {PipeModule} from "../pipe/pipe/pipe.module";

@NgModule({
  imports: [
    CommonModule,
    projectRouting,
    BrowserAnimationsModule,
    ReactiveFormsModule, FormsModule,
    /* Angular Material & Animation Modeul */
    MatToolbarModule,MatSnackBarModule,MatCardModule,MatInputModule,
    MatRadioModule,MatButtonModule,MatListModule,

    PipeModule
  ],
  declarations: [
    CarouselComponent,
    FooterComponent,
    NavbarComponent,
    ProductItemComponent,
    SearchComponent,
    StarsComponent,
    ProjectStartpointComponent,
    ProductDetailComponent,
    HomeComponent
  ]
})
export class ProjectModule { }
