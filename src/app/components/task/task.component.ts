import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../tasks'
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {
  @Input() task!: Task
  @Output() deleteEvent = new EventEmitter()

  deleteTask () {
    this.deleteEvent.emit(this.task.id)
  }
  getStyleByStatus (status: boolean) {
    if (status) return 'completed'
    return 'incomplete'
  }
}
