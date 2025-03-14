import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskManagerComponentTable } from './taskManagerTable/task-manager-table.component';
import { TaskManagerRoutingModule } from './task-manager-routing.module';




@NgModule({
  declarations: [
    TaskManagerComponentTable
  ],
  imports: [
    CommonModule,
    TaskManagerRoutingModule
  ],
  exports: [
    TaskManagerComponentTable
  ]
})
export class TaskManagerModule { }
