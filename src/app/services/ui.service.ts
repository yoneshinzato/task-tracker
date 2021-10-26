import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class UiService {
  title = "Task Tracker"
  private showAddTask: boolean = false
  private subject = new Subject<any>()

  constructor() { }

  toggleAddTask(): void {
    this.showAddTask = !this.showAddTask
    this.subject.next(this.showAddTask) //passa o valor
  }

  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }


}
