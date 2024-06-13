import { Component, Input } from '@angular/core';
import { Loggingservice } from '../logging-service';
import { AccountsService } from '../account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // providers: [Loggingservice]
})
export class AccountComponent {
  @Input() account: { name: string, status: string };
  @Input() id: number;
  constructor(private loggingService: Loggingservice, private accountService: AccountsService) {

  }

  onSetTo(status: string) {
    this.accountService.updateStatus(this.id, status);
    // this.loggingService.logStatusChange(status);
    // console.log('A server status changed, new status: ' + status);
    this.accountService.statusUpdated.emit(status);
  }
}
