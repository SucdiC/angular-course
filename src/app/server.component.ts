//components are typescript classes that Angualr instantiates 
//Both AppComponent and ServerComponent are classes and components (naming convention of components is to add Component to the name)
//Components have to be exported from typescript file in order to be used
//Decorators (@) enhance your type script code, tells class/component how to look

import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl:  './server.component.html'

})




export class ServerComponent {
    serverId: number = 10;
    serverStatus: string = 'offline';

    getServerStatus () {
        return this.serverStatus;
    }


}