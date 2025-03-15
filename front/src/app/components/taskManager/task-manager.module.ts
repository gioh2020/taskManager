import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskManagerComponentTable } from './taskManagerTable/task-manager-table.component';
import { TaskManagerRoutingModule } from './task-manager-routing.module';
import { TaskManagerpageComponent } from './pages/task-managerpage.component';
import { TaskManagerFormComponent } from './taskManagerForm/task-manager-form.component';
import { ReactiveFormsModule } from '@angular/forms';





@NgModule({
  declarations: [
    TaskManagerComponentTable,
    TaskManagerpageComponent,
    TaskManagerFormComponent,
    
  ],
  imports: [
    CommonModule,
    TaskManagerRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    TaskManagerComponentTable
  ]
})
export class TaskManagerModule { }
