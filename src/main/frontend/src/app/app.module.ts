import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {HttpModule} from "@angular/http";
import { HomeComponent } from './component/common/home/home.component';
import {RouterModule} from "@angular/router";
import {routes} from "./app.routes";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {
  MatButtonModule, MatCardModule, MatIconModule, MatInputModule, MatListModule, MatRadioModule, MatSnackBarModule,
  MatToolbarModule
} from "@angular/material";
import { Chapter1StartpointComponent } from './component/chapter-1-startpoint/chapter-1-startpoint.component';
import { NewLineToBreakerPipe } from './pipe/new-line-to-breaker.pipe';
import {FormsModule} from "@angular/forms";
import {ProjectModule} from "./project/project.module";
import {ProductService} from "./service/product.service";
import { Chapter2StartpointComponent } from './component/chapter-2-startpoint/chapter-2-startpoint.component';
import {HashLocationStrategy, LocationStrategy} from "@angular/common";
import {Chapter2Module} from "./component/chapter-2-startpoint/chapter-2/chapter-2.module";
import { HelloWorldComponent } from './component/chapter-1-startpoint/components/hello-world/hello-world.component';
import { Chapter3StartpointComponent } from './component/chapter-3-startpoint/chapter-3-startpoint.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Chapter1StartpointComponent,
    NewLineToBreakerPipe,
    Chapter2StartpointComponent,
    HelloWorldComponent,
    Chapter3StartpointComponent,
  ],
  imports: [
    /* Angular Module */
    BrowserModule,HttpModule,FormsModule,
    BrowserAnimationsModule,
    /* Angular Material & Animation Modeul */
    MatToolbarModule,MatSnackBarModule,MatCardModule,MatInputModule,
    MatRadioModule,MatButtonModule,MatListModule,MatIconModule,
    /* App Module */
    ProjectModule, Chapter2Module,
    RouterModule.forRoot(routes),
  ],
  providers: [ProductService, {provide:LocationStrategy,useClass:HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
