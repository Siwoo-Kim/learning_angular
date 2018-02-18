import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { P2AppComponent } from './components/p2-app.component';
import {FormsModule} from "@angular/forms";
import { ServerComponent } from './components/server/server.component';
import {ServersComponent} from "./components/servers/servers.component";
import {RecipeProjectModule} from "./recipe-project/recipe-project.module";
import { CockpitComponent } from './components/cockpit/cockpit.component';
import { ServerElementComponent } from './components/server-element/server-element.component';
import {BasicHighlightDirective} from "./components/basic-highlight/basic-highlight.directive";
import { BetterHighlightDirective } from './components/better-highlight/better-highlight.directive';
import { AccountComponent } from './components/account/account.component';
import { NewAccountComponent } from './components/new-account/new-account.component';
import {LoggingService} from "./services/logging-service";

@NgModule({
  imports: [
    CommonModule,FormsModule,
    RecipeProjectModule,
  ],
  declarations: [
    P2AppComponent,
    ServerComponent,
    ServersComponent,
    CockpitComponent,
    ServerElementComponent,
    /*directive also be declared in declarations*/
    BasicHighlightDirective,
    BetterHighlightDirective,
    AccountComponent,
    NewAccountComponent,
  ],
  providers: [LoggingService]
})
export class Project2Module { }
