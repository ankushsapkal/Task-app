import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { TaskListComponent } from './task-list.component';
import { AddTaskFormComponent } from './add-task-form/add-task-form.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [TaskListComponent, AddTaskFormComponent],
  bootstrap: [TaskListComponent],
})
export class TaskModule {}
