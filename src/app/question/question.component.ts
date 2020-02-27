import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  qstn:string;
  opt1:string;
  opt2:string;
  opt3:string;
  opt4:string;
  answer:string;

  options: string[];
  constructor() { }

  ngOnInit(): void {

  this.qstn='You purchased two pieces of cloth measuring 1.2 m and 1.3 m each at Rs. 330 and Rs. 270 per meter respectively and gave Rs. 1000 at the payment counter. How much cash will you get back?';

  this.options=  ['Winter', 'Spring', 'Summer', 'Autumn'];
this.opt1='5';
this.opt2='3';
this.opt3='2';
this.opt4='1';
  }

}
