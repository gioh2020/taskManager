import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskManagerpageComponent } from './task-managerpage.component';

describe('TaskManagerpageComponent', () => {
  let component: TaskManagerpageComponent;
  let fixture: ComponentFixture<TaskManagerpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaskManagerpageComponent]
    });
    fixture = TestBed.createComponent(TaskManagerpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
