// src/app/results/results.component.ts
// import { Component, OnInit } from '@angular/core';
import { Component, Input } from "@angular/core";
import { Answers } from "../quiz.model";

@Component({
  selector: "app-results",
  templateUrl: "./results.component.html",
  styleUrls: ["./results.component.scss"]
})
export class ResultsComponent {
  @Input() answers: Answers;
}
