import {Injectable} from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AdminMessageService {

  messages: Array<string> = [];
  subject = new Subject<Array<string>>();

  constructor() {
  }

  add(message: string): void {
    this.messages.push(message);
    this.subject.next(this.messages);

  }

  clear() {
    this.messages = [];
  }

  addSpringErrors(error: any): void {
    for (let message of error.errors) {
      this.messages.push("Field: " + message.field + " -> " + message.defaultMessage)
    }
  }
}
