import { Component, OnInit, HostListener, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MdlDialogReference, MdlTextFieldComponent } from 'angular2-mdl';

//export const LoginToken = new OpaqueToken('pisces login token');

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('firstElement') private _accountInput: MdlTextFieldComponent;

  constructor(private _mdlDlgReference: MdlDialogReference) {
    this._mdlDlgReference.onHide().subscribe(
      (user) => {
        if (user) {
          console.log('authenticated user', user);
        }
      }
    );

    this._mdlDlgReference.onVisible().subscribe(() => {
      this._accountInput.setFocus();
    })
  }

  ngOnInit() {
    
  }

  login(l: NgForm) {
    this._mdlDlgReference.hide();
    console.log('wow, login.', l.value);
  }

  @HostListener('keydown.esc')
  onEsc(): void {
    this._mdlDlgReference.hide();
  }

}
