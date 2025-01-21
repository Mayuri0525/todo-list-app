import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css'],
})
export class TaskFormComponent {
  @Input() task: Task = { id: 0, title: '', description: '', isCompleted: false };
  @Output() saveTask = new EventEmitter<Task>();

  onSubmit() {
    this.saveTask.emit(this.task);
  }
}