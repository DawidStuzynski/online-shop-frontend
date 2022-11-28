import {Component, OnDestroy, OnInit} from '@angular/core';
import {AdminMessageService} from "../admin-message.service";

@Component({
  selector: 'app-admin-message',
  templateUrl: './admin-message.component.html',
  styleUrls: ['./admin-message.component.scss']
})
export class AdminMessageComponent implements OnInit, OnDestroy {

  messages: Array<string> = [];

  constructor(private adminMessageService: AdminMessageService) {

  }

  ngOnInit(): void {
    this.adminMessageService.subject.subscribe(messages => this.messages = messages)
  }

  clearMessages() {
    this.messages = [];
    this.adminMessageService.clear();

  }

  ngOnDestroy(): void {
    this.adminMessageService.subject.unsubscribe();
  }

}
