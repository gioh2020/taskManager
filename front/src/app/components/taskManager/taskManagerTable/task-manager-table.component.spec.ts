import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskManagerComponentTable } from '../taskManagerTable/task-manager-table.component';

describe('TaskManagerComponent', () => {
  let component: TaskManagerComponentTable;
  let fixture: ComponentFixture<TaskManagerComponentTable>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaskManagerComponentTable]
    });
    fixture = TestBed.createComponent(TaskManagerComponentTable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
