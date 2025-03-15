import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskManagerpageComponent } from './pages/task-managerpage.component';

const routes: Routes = [
  {path: 'taskManager', component: TaskManagerpageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskManagerRoutingModule { }
