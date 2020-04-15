import { Trainee } from './../trainee';
import { Component, OnInit } from '@angular/core';
import { TraineeService } from '../trainee.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-addtrainer',
  templateUrl: './addtrainer.component.html',
  styleUrls: ['./addtrainer.component.css']
})
export class AddtrainerComponent implements OnInit {
  trainee: Trainee = new Trainee();

  constructor(private traineeservice:TraineeService, private route: Router) { }

  ngOnInit() {
  }
  addTrainer(){
    console.log("add trainer");
    this.traineeservice.insertTrainee(this.trainee).subscribe(data=>{this.trainee=data});
    this.route.navigateByUrl("/view");
  }

}
