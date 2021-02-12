import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JoinForm } from '../_models/join-form.model';
import { EmailService } from '../_services/email.service';

@Component({
  selector: 'app-jointeam',
  templateUrl: './jointeam.component.html',
  styleUrls: ['./jointeam.component.scss']
})
export class JointeamComponent implements OnInit {
  joinForm: FormGroup;
  showSuccess = false;
  showError = false;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly emailService: EmailService) { }

  ngOnInit() {
    this.buildForm();
  }

  public buildForm(): void {
    this.joinForm = this.formBuilder.group({
      name: ['', Validators.required],
      serviceArea: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      phone: ['', Validators.required],
      isCPO: [false]
    });
  }

  public submitForm(): void {
    this.showError = false;
    this.showSuccess = false;
    console.log(this.joinForm);
    const joinObj = new JoinForm(
      this.joinForm.value.name,
      this.joinForm.value.serviceArea,
      this.joinForm.value.email,
      this.joinForm.value.phone,
      this.joinForm.value.isCPO
      );
    this.emailService.sendJoinTeamEmail(joinObj).subscribe(res => {
      console.log(res);
      this.joinForm.reset();
      this.showSuccess = true;
    },
    (error)=> {
      console.log(error);
      this.showError = true;
    });
  }

}
