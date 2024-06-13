import { Component } from '@angular/core';
import { Loggingservice } from '../logging-service';
import { AccountsService } from '../account.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // providers: [Loggingservice]
})
export class NewAccountComponent {

  // @Output accountAdded=new EventEmmitter
  constructor(private loggingService: Loggingservice, private accountService: AccountsService) {
    this.accountService.statusUpdated.subscribe(
      (status:string)=>alert('New Status: ' + status)
    )
  }
  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.addActount(accountName, accountStatus);
    // this.loggingService.logStatusChange(accountStatus);
    // console.log('A server status changed, new status: ' + accountStatus);
  }
}
