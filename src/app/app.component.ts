import { Component } from '@angular/core';
import { MdlDialogService, MdlDialogReference } from 'angular2-mdl';
import { LoginComponent } from './login/login.component';
import { flyInOutTrigger, hostConfig } from './animations/flyInOutTrigger-animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [flyInOutTrigger],
  host: hostConfig,
})
export class AppComponent {

  constructor(private _mdlDlgService: MdlDialogService) {}

  showLoginDlg($event: MouseEvent) {
    let pDlg = this._mdlDlgService.showCustomDialog(
      {
        component: LoginComponent,
        //providers: [{provide: LoginToken, useValue: 'hey, logining.'}],
        isModal: true,
        styles: {'width': '350px'},
        clickOutsideToClose: true,
        openFrom: $event,
        enterTransitionDuration: 400,
        leaveTransitionDuration: 400
      }
    );
  }
}
