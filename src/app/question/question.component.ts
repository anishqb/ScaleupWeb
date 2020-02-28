import { Component, OnInit } from '@angular/core';
import { Question } from '../Model/question.model';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  answer: string;
  options: string[];
  qstns: any[] = [];
  i: number = 0;
  isEnd: boolean = false;
  isStart: boolean = true;

  constructor(private apiService:ApiService) { }

  ngOnInit(): void {

    this.isStart = true;

    var response=this.apiService.readQuestions();

    if(response.status==200){
      response.result.forEach(element => {
        this.qstns.push(element);
      });
    }

    if (this.i == this.qstns.length - 1) {
      this.isEnd = true;
    }
  }

  onNext() {
    this.i++;
    if (this.i == this.qstns.length - 1) {
      this.isEnd = true;
    }
    this.isStart = false;
  }

  onPrevious() {
    this.i--;
    if (this.i == 0) {
      this.isStart = true;
    }
    this.isEnd = false;
  }
}
