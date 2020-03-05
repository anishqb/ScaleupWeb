import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../service/api.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-instruction',
  templateUrl: './instruction.component.html',
  styleUrls: ['./instruction.component.css']
})
export class InstructionComponent implements OnInit {

  constructor(private router: Router, private formBuilder: FormBuilder, private apiService: ApiService) { }
  
  qTypeForm: FormGroup;
  isAccept: boolean;
  Types: any[] = [];

  ngOnInit(): void {
    this.isAccept = false;
    var response = this.apiService.getQuestionTypes(); 

    if (response.status == 200) {
      response.result.forEach(element => {
        this.Types.push(element);
      });
    }

  }

  onContinue() {
    if (!this.isAccept) {
      return;
    }
    this.router.navigate(["app-question"]);
  }

  changeType(typ:any){

    alert(typ);
  }

}
