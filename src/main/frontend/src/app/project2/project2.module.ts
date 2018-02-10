import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { P2AppComponent } from './components/p2-app.component';
import {FormsModule} from "@angular/forms";
import { ServerComponent } from './components/server/server.component';
import {ServersComponent} from "./components/servers/servers.component";
import {RecipeProjectModule} from "./recipe-project/recipe-project.module";
import { CockpitComponent } from './components/cockpit/cockpit.component';
import { ServerElementComponent } from './components/server-element/server-element.component';

@NgModule({
  imports: [
    CommonModule,FormsModule,
    RecipeProjectModule,
  ],
  declarations: [
    P2AppComponent, ServerComponent,ServersComponent, CockpitComponent, ServerElementComponent
  ]
})
export class Project2Module { }
