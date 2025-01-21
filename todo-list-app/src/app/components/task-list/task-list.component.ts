import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/task.model';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];
  selectedTask: Task | null = null;

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => {
      this.tasks = tasks;
    });
  }

  onAddTask() {
    this.selectedTask = { id: Date.now(), title: '', description: '', isCompleted: false };
  }

  onEditTask(task: Task) {
    this.selectedTask = { ...task };
  }

  onDeleteTask(taskId: number) {
    this.taskService.deleteTask(taskId);
  }

  onSaveTask(task: Task) {
    if (this.tasks.some((t) => t.id === task.id)) {
      this.taskService.updateTask(task);
    } else {
      this.taskService.addTask(task);
    }
    this.selectedTask = null;
  }
}
