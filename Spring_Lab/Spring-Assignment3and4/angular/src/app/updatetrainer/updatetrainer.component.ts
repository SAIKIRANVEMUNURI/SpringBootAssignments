import { TraineeService } from './../trainee.service';
import { Component, OnInit } from '@angular/core';
import { Trainee } from '../trainee';

@Component({
  selector: 'app-updatetrainer',
  templateUrl: './updatetrainer.component.html',
  styleUrls: ['./updatetrainer.component.css']
})
export class UpdatetrainerComponent implements OnInit {
  updatevalue:Trainee=new Trainee();

  constructor(private traineeService:TraineeService) { }

  ngOnInit() {
  }
  updateTrainer(){
    this.traineeService.updateTrainee(this.updatevalue).subscribe(data=>{this.updatevalue=data});
    alert("Your data updated");
  }

}
