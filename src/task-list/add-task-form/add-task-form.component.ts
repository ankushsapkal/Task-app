import { Component } from '@angular/core';
import { Task } from '../../task.model';
import { TaskService } from '../../task.service';

@Component({
  selector: 'app-add-task-form',
  templateUrl: './add-task-form.component.html',
  styleUrls: ['./add-task-form.component.css'],
})
export class AddTaskFormComponent {
  constructor(private taskService: TaskService) {}
  newTask: { title: string } = { title: '' };
  taskInput:any

  add(event:Event, inputElement: HTMLInputElement) {
    event.preventDefault();
    
    if(inputElement.value == ''){
      return;
    }
     
    this.taskService.addTask(inputElement.value);
    inputElement.value='';
  }
}
