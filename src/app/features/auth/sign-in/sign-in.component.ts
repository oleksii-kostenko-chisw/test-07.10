import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthDTO } from '@auth/models/auth.dto';
import { SignInService } from './sign-in.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  providers: [SignInService],
})
export class SignInComponent implements OnInit {
  public signInForm: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private _signInService: SignInService
  ) {}

  ngOnInit(): void {
    this._formInit();
  }

  private _formInit(): void {
    this.signInForm = this._formBuilder.group(
      {
        login: ['', [Validators.required, Validators.minLength(3)]],
        password: ['', [Validators.required, Validators.minLength(8)]],
      },
      { updateOn: 'blur' }
    );
  }

  public get isSubmitDisabled(): boolean {
    return !this.signInForm.valid;
  }

  public submitSignInForm(): void {
    if (!this.signInForm.valid) {
      return;
    }

    this._signInService
      .signIn(this.signInForm.value as AuthDTO)
      .subscribe((resp: any) => console.log('::: resp ', resp));
  }

  public hasError(name: string): boolean {
    return this.signInForm.get(name).dirty && !this.signInForm.get(name).valid;
  }
}
