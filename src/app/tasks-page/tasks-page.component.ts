import {Component, OnInit} from "@angular/core";
import {Task} from './task';

@Component({
  selector: 'app-task-page',
  templateUrl: './tasks-page.component.html',
  styleUrls: ['./tasks-page.component.css']
})

export class TasksPageComponent implements OnInit {

  public task = new Task();
  public doTasks: Task[] = [];
  public progressTasks = [];
  public doneTasks = [];
  public lastId: number = 0;

  constructor() {}

  ngOnInit() {}

  public addTask(): void {
    if (!this.task.id) {
      this.task.id = ++this.lastId;
    }
    this.doTasks.push(this.task);
    this.task = new Task();
  }

  public  deleteTask(tasks, id): void {
    let index: number = -1;
    tasks.find((task: Task, i: number) => {
      if (task.id === id) {
        index = i;
        return true;
      }
    });
    if (index !== -1) {
      tasks.splice(index, 1);
    }
  }

  public transferTasks(nextColumn, currentColumn): void {
    nextColumn.push(...currentColumn);
    currentColumn.length = 0;
  }

  public swapTaskDown(tasks, id): void {
    let index: number = -1;
    tasks.find((task: Task, i: number) => {
      if (task.id === id) {
        index = i;
        return true;
      }
    });
    if (index < tasks.length - 1) {
      let temp;
      temp = tasks[index];
      tasks[index] = tasks[index + 1];
      tasks[index + 1] = temp;
    }
  }

  public  swapTaskUp(tasks, id): void {
    let index: number = -1;
    tasks.find((task: Task, i: number) => {
      if (task.id === id) {
        index = i;
        return true;
      }
    });
    if (index !== 0) {
      // [tasks[index], tasks[index - 1]] = [tasks[index - 1], tasks[index]];
      let temp;
      temp = tasks[index - 1];
      tasks[index - 1] = tasks[index];
      tasks[index] = temp;
    }
  }

  // public  transferFurther(): void {
  //   this.nextColumn.push(this.task);
  //   this.removeTask();
  // }

}





















