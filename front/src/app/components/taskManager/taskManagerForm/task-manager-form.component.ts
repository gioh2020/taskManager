import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Task, TaskManagerService } from '../services/task-manager-servise.service';
import { delay, tap } from 'rxjs';
import { User } from '../../auth/interface';

@Component({
  selector: 'app-task-manager-form',
  templateUrl: './task-manager-form.component.html',
  styleUrls: ['./task-manager-form.component.css']
})
export class TaskManagerFormComponent {
  taskForm: FormGroup;
  submitted: boolean = false;
  isLoading: boolean = false;
  successful: boolean = false;
  errorMessage: string = '';
  userDataString: string | null;
  userData: User;
  taskbyUser: Task[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private taskService: TaskManagerService,
    private router: Router
  ) {
    this.userDataString = sessionStorage.getItem('user') || '';

    this.userData = JSON.parse(this.userDataString);

    this.taskForm = this.formBuilder.group({
      title: ['', [Validators.required]],
      description: [''],
      id: [null],
      expirationDate: ['', [Validators.required]],
      status: ['Pendiente', [Validators.required]],
      userId: [this.userData.id]
    });
  }

  public ngOnInit() {
    this.getUsersTasks()
  }

  private getUsersTasks() {
    this.taskService.getUserTasks(Number(this.userData.id)).subscribe((res) => {
      this.taskbyUser = res
    })
  }

  public onSubmit(): void {
    this.submitted = true;
    this.errorMessage = '';
    this.successful = false;

    if (this.taskForm.invalid) {
      return;
    }

    this.isLoading = true;

    if (!this.userDataString) {
      this.errorMessage = 'Usuario no autenticado';
      this.isLoading = false;
      return;
    }
    const task: Task = this.taskForm.value;

    this.taskService.createTask(task)
      .pipe(
        tap(() => {
          this.isLoading = false;
          this.successful = true;
          this.taskForm.disable()


        }),
        delay(1500)
      )

      .subscribe((res) => {
        this.getUsersTasks()
        this.resetForm()
        this.taskForm.enable(),
          this.successful = false

      }
      );
  }

  private resetForm(): void {
    this.taskForm.reset({
      title: '',
      description: '',
      id: null,
      expirationDate: '',
      status: 'Pendiente',
      userId: this.userData.id
    });
    this.taskForm.markAsPristine();
    this.taskForm.markAsUntouched();
    this.submitted = false;
  }
  public logout(): void {
    this.router.navigate(['/auth/login'])
  }
}
