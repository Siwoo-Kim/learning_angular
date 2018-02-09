import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { P2AppComponent } from './components/p2-app/p2-app.component';
import {FormsModule} from "@angular/forms";
import { ServerComponent } from './components/p2-app/server/server.component';
import {ServersComponent} from "./components/p2-app/servers/servers.component";

@NgModule({
  imports: [
    CommonModule,FormsModule,
  ],
  declarations: [
    P2AppComponent, ServerComponent,ServersComponent
  ]
})
export class Project2Module { }
