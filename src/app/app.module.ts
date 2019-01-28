import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';
import { UserAsyncComponent } from './user-async/user-async.component';
import { MaterialModule } from './material.module';
<<<<<<< HEAD
import { NgbModule, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

=======
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
>>>>>>> 9d9e25a88f69b7a1409effadf97073d8b05bbe25

@NgModule({
  declarations: [
    AppComponent,
    UserAsyncComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    MaterialModule,
<<<<<<< HEAD
    NgbModule.forRoot(),
    NgbCarouselModule,
=======
    NgbModule,
    FormsModule
>>>>>>> 9d9e25a88f69b7a1409effadf97073d8b05bbe25
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
