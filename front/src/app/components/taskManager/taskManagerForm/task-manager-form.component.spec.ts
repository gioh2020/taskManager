import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskManagerFormComponent } from './task-manager-form.component';

describe('TaskManagerFormComponent', () => {
  let component: TaskManagerFormComponent;
  let fixture: ComponentFixture<TaskManagerFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaskManagerFormComponent]
    });
    fixture = TestBed.createComponent(TaskManagerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
