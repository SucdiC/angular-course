import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-servers',
  // template: '<app-server></app-server><app-server></app-server>',
  templateUrl: './servers.component.html', 
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  //allownewserver is a property
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName= "";


  constructor() {
    // JS function that executes something after a timeframe (msec)
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);

   }

  ngOnInit(): void {
  }

  //method for button event
  onCreateServer(){
    this.serverCreationStatus = 'Server was created!';

  }

  onUpdateServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
    //value gives name of server you typed into box

  }

}
