import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { P2AppComponent } from './components/p2-app.component';
import {FormsModule} from "@angular/forms";
import { ServerComponent } from './components/server/server.component';
import {ServersComponent} from "./components/servers/servers.component";
import {RecipeProjectModule} from "./recipe-project/recipe-project.module";

@NgModule({
  imports: [
    CommonModule,FormsModule,
    RecipeProjectModule,
  ],
  declarations: [
    P2AppComponent, ServerComponent,ServersComponent
  ]
})
export class Project2Module { }
