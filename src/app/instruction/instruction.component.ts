import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-instruction',
  templateUrl: './instruction.component.html',
  styleUrls: ['./instruction.component.css']
})
export class InstructionComponent implements OnInit {

  constructor(private router: Router) { }

  isAccept:boolean;

  ngOnInit(): void {
    this.isAccept=false;
  }

  onContinue(){
    if (!this.isAccept) {
      return;
    }
    this.router.navigate(["app-question"]);
  }

}
