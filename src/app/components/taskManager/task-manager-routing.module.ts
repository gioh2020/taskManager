import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskManagerComponentTable } from './taskManagerTable/task-manager-table.component';

const routes: Routes = [
  {path: 'taskManager', component: TaskManagerComponentTable}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskManagerRoutingModule { }
