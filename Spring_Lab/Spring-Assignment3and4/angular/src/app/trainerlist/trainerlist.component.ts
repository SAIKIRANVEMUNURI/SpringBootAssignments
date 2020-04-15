import { Trainee } from './../trainee';
import { Component, OnInit } from '@angular/core';
import { TraineeService } from '../trainee.service';

@Component({
  selector: 'app-trainerlist',
  templateUrl: './trainerlist.component.html',
  styleUrls: ['./trainerlist.component.css']
})
export class TrainerlistComponent implements OnInit {

  trainee: Trainee[] = [];
  editFlag: boolean = false;
  constructor(private traineeservice:TraineeService) { }

  ngOnInit() {
    this.traineeservice.loadtrainee().subscribe(data => {
      this.trainee = data;
    });
  }
removeTrainer(id:number)
{
  this.traineeservice.deleteTrainee(id).subscribe(data=>{this.trainee=data;});
  alert("Your data with"+id+"Has been deleted");
}

}
