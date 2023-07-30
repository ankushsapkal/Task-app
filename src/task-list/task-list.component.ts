import { Component, OnInit } from '@angular/core';
import { Task } from '../task.model';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];
  filteredTasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.tasks = this.taskService.getTasks();
    this.filteredTasks = this.tasks;
  }

  onTaskCompleted(taskId: number): void {
    this.taskService.markAsCompleted(taskId);
  }

  filterTasks(status: string): void {
    if (status === 'All') {
      this.filteredTasks = this.tasks;
    } else if (status === 'Completed') {
      this.filteredTasks = this.tasks.filter((task) => task.completed);
    } else if (status === 'Incomplete') {
      this.filteredTasks = this.tasks.filter((task) => !task.completed);
    }
  }
}
