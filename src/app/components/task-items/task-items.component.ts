import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/interface/Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-task-items',
  templateUrl: './task-items.component.html',
  styleUrls: ['./task-items.component.css']
})
export class TaskItemsComponent {
  @Input() task!: Task;
  @Output() taskDelete: EventEmitter<Task> = new EventEmitter()
  @Output() taskUpdate: EventEmitter<Task> = new EventEmitter()


  faTimes = faTimes;

  onDelete(task: Task) {
    this.taskDelete.emit(task)
  }

  onUpdate(task: Task){
    this.taskUpdate.emit(task)
  }
}
