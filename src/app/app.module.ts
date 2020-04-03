import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';

import { AppComponent } from './app.component';
import { DocumentUploadComponent } from './components/document-upload/document-upload.component';
import { QuestionComponent } from './components/question/question.component';
import { PackComponent } from './components/pack/pack.component';

@NgModule({
  declarations: [
    AppComponent,
    DocumentUploadComponent,
    QuestionComponent,
    PackComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
