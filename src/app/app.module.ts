// src/app/app.module.ts
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { QuestionFormComponent } from "./question-form/question-form.component";
import { ResultsComponent } from './results/results.component';

@NgModule({
  declarations: [AppComponent, QuestionFormComponent, ResultsComponent],
  imports: [BrowserModule, HttpClientModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
