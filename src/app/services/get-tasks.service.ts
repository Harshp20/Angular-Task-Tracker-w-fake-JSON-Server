import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { tasks, Task } from '../tasks'
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class GetTasksService {
  private apiUrl: string = 'http://localhost:4000/tasks'
  private subject = new Subject<Task[]>()
  tasks: Task[] = tasks
  
  headerOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) { }

  getTasks (): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl)
  }

  deleteTask (id: number) {
    this.subject.next(this.tasks)
    return this.http.delete<Task>(this.apiUrl.concat(`/${id}`))
  }

  addTask (taskName: string): Observable<Task> {
    this.subject.next(this.tasks)
    return this.http.post<Task>(this.apiUrl, { id: Date.now(), title: taskName, status: false }, this.headerOptions)
  }

  toggleStatus (task: Task): Observable<Task> {
    this.subject.next(this.tasks)
    return this.http.put<Task>(this.apiUrl.concat(`/${task.id}`), task)
  }

  hasSubcscribed () {
    return this.subject.asObservable()
  }
}
