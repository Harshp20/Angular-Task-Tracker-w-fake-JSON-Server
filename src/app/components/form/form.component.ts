import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  @Output() add = new EventEmitter

  taskName: string = ''

  addToList () {
    this.add.emit(this.taskName)
    this.taskName = ''
  }
}
