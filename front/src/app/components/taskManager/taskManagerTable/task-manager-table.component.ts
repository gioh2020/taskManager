import { Component } from '@angular/core';
import { Task, TaskManagerService } from '../services/task-manager-servise.service';
import { User } from '../../auth/interface';

@Component({
  selector: 'app-task-manager-table',
  templateUrl: './task-manager-table.component.html',
  styleUrls: ['./task-manager-table.component.css']
})
export class TaskManagerComponentTable {
  taskbyUser: Task[] = [];
   userDataString: string | null;
    userData: User;
  constructor(private taskService: TaskManagerService,) {
    this.userDataString = sessionStorage.getItem('user') || '';

    this.userData = JSON.parse(this.userDataString);
  }

  ngOnInit(){
    this.taskService.userTask.subscribe((res)=>{
      this.taskbyUser = res
    })
  }
  onDelete(task : Task){
    const {id, userId} = task
    this.taskService.deleteTask(id, userId).pipe().subscribe()
  }
  onChangeTask(task : Task, event : Event){
    const newStatus = (event.target as HTMLSelectElement).value;
    task.status = newStatus
    this.taskService.updateTask(task).pipe().subscribe()
  }

}
