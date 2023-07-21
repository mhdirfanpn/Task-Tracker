import { Component, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/interface/Task';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  @Output() addTask : EventEmitter<Task> = new EventEmitter()
  showAddTask : boolean = false
  subscription!: Subscription

  text: string='';
  day: string='';
  reminder: boolean = false

  onSubmit(){
    if(!this.text){
      alert('plaese add a task')
      return
    }

    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    }

    this.addTask.emit(newTask)

    this.text = ''
    this.day = ''
    this.reminder = false
  }

  constructor(private uiService : UiService ){
     this.subscription = this.uiService.onToggle().subscribe(value=>this.showAddTask = value)
  }

}
