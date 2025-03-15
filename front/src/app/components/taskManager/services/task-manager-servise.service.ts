import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, catchError, delay, Observable, tap, throwError } from 'rxjs';
import { environment } from 'src/environments/environments';

export interface Task {
  id: number;
  title: string;
  description: string;
  expirationDate: Date;
  status: string;
  userId: number;
}

@Injectable({
  providedIn: 'root'
})
export class TaskManagerService {
  private readonly baseUrl: string = environment.baseUrl;
  public userTask = new BehaviorSubject<Task[]>([])

  constructor(private http: HttpClient) { }

  createTask(task: Task): Observable<Task> {
    return this.http.post<Task>(`${this.baseUrl}Task`, task).pipe(
      delay(1000),
      catchError(error => throwError(() => error))
    );
  }

  getUserTasks(userId: number): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.baseUrl}Task/user/${userId}`).pipe(
      tap((tasks)=> this.userTask.next(tasks)  )
    );
  }

  getTaskById(taskId: number, userId: number): Observable<Task> {
    return this.http.get<Task>(`${this.baseUrl}Task/${taskId}/user/${userId}`);
  }

  updateTask(task: Task): Observable<Task> {
    return this.http.put<Task>(`${this.baseUrl}task`, task);
  }

  deleteTask(taskId: number, userId: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}task/${taskId}/user/${userId}`);
  }
}
