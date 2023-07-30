import { Injectable } from '@angular/core';
import { Task } from './task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: Task[] = [{
    id: 1,
    title: 'Task1',
    completed: false
  },
    {
      id: 2,
      title: 'Task2',
      completed: true
    },{
      id: 3,
      title: 'Task3',
      completed: false 
    },
      {
        id: 4,
        title: 'Task4',
        completed: false
      }

  ];
  private lastId = this.tasks[this.tasks.length-1].id;

  addTask(title: string): void {
    const newTask: Task = {
      id: ++this.lastId,
      title: title,
      completed: false
    };
    this.tasks.push(newTask);
  }

  getTasks():Task[] {
    return this.tasks;
  }

  markAsCompleted(taskId: number): void {
    const task = this.tasks.find(t => t.id === taskId);
    if (task) {
      task.completed = !task.completed;
    }
  }
}