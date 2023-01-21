import { Component } from '@angular/core';
import { Task } from '../../tasks'
import { GetTasksService } from '../../services/get-tasks.service'
import { Subscription} from 'rxjs'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent {
  tasks!: Task[]
  subscription!: Subscription
  constructor(private taskService: GetTasksService) {
    this.subscription = this.taskService.hasSubcscribed().subscribe(res => console.log(res)) // Returns old tasks array
  }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((res) => this.tasks = res)
  }

  addToList(taskName: string) {
    this.taskService.addTask(taskName).subscribe((newTask) => this.tasks = [newTask, ...this.tasks])
  }

  deleteTask (id: number) {
    this.taskService.deleteTask(id).subscribe(() =>  this.tasks = this.tasks.filter(task => task.id !== id))
  }

  toggleStatus (task: Task) {
    task.status = !task.status
    this.taskService.toggleStatus(task).subscribe(() => {})
  }
}
