import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User } from '../interface';
import { Observable, catchError, delay, map, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environments';

interface LoginResponse {
  user: User;
  isAuthenticated: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly baseUrl: string = environment.baseUrl;

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  public createAccount(user: User): Observable<User> {
    const url: string = `${this.baseUrl}User`;
    return this.http.post<User>(url, user).pipe(
      delay(1000),
      catchError(error => throwError(() => error))
    );
  }

  public login(username: string, password: string): Observable<LoginResponse> {
    const url: string = `${this.baseUrl}User/login`;
    return this.http.post<User>(url, { username, password }).pipe(
      delay(1000),
      map(user => {
        if (user && user.password === password) {
          
          this.saveUserSession(user);
          return {
            user,
            isAuthenticated: true
          };
        } else {
          throw new Error('Credenciales inválidas');
        }
      }),
      catchError(error => throwError(() => error))
    );
  }

  private saveUserSession(user: User): void {
    // Guardamos los datos necesarios en sessionStorage
    sessionStorage.setItem('user', JSON.stringify({
      id: user.id,
      username: user.username,
      isLoggedIn: true
    }));
  }

  public isLoggedIn(): boolean {
    const user = sessionStorage.getItem('user');
    if (!user) return false;
    
    try {
      const userData = JSON.parse(user);
      return userData.isLoggedIn === true;
    } catch {
      return false;
    }
  }

  public logout(): void {
    sessionStorage.removeItem('user');
    this.router.navigate(['/auth/login']);
  }

  public getCurrentUser(): User | null {
    const user = sessionStorage.getItem('user');
    if (!user) return null;
    
    try {
      return JSON.parse(user);
    } catch {
      return null;
    }
  }
}
