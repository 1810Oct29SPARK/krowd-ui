import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';
import { UserAsyncComponent } from './user-async/user-async.component';
import { MaterialModule } from './material.module';
import { NgbModule, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    UserAsyncComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    MaterialModule,
    NgbModule.forRoot(),
    NgbCarouselModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
