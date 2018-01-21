import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {HttpModule} from "@angular/http";
import { HomeComponent } from './component/common/home/home.component';
import {RouterModule} from "@angular/router";
import {routes} from "./app.routes";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {
  MatButtonModule, MatCardModule, MatInputModule, MatRadioModule, MatSnackBarModule,
  MatToolbarModule
} from "@angular/material";
import { Chapter1StartpointComponent } from './component/chapter-1-startpoint/chapter-1-startpoint.component';
import { NewLineToBreakerPipe } from './pipe/new-line-to-breaker.pipe';
import {FormsModule} from "@angular/forms";
import {ProjectModule} from "./project/project.module";
import {ProductService} from "./service/product.service";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Chapter1StartpointComponent,
    NewLineToBreakerPipe,
  ],
  imports: [
    /* Angular Module */
    BrowserModule,HttpModule,FormsModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    /* Angular Material & Animation Modeul */
    MatToolbarModule,MatSnackBarModule,MatCardModule,MatInputModule,
    MatRadioModule,MatButtonModule,
    /* App Module */
    ProjectModule,
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
