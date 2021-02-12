import { formatDate } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JoinForm } from '../_models/join-form.model';
import { SESEmailTemplate } from '../_models/ses-email-template.model';

@Injectable()
export class EmailService {
    apiGatewayUrl = 'https://hbpkd1asil.execute-api.us-east-1.amazonaws.com/production/contractorcontactgateway';
    // sesApiUrl = 'https://email-fips.us-east-1.amazonaws.com/v2/email/outbound-emails';

    // emailHeaders: HttpHeaders = new HttpHeaders({
    //     Content: 'application/json',
    //     Action: 'SendEmail',
    //     Version: formatDate(new Date(), 'YYYY-MM-DD', 'en-US', 'UTC')
    // });

    constructor(private readonly http: HttpClient) { }

    public sendContactUsEmail(contactForm): Observable<any> {
        return this.http.post(this.apiGatewayUrl, contactForm);
    }

    public sendJoinTeamEmail(joinTeamForm: JoinForm): Observable<any> {
        // const newEmail = new SESEmailTemplate('New Inquiry!', joinTeamForm);
        console.log(joinTeamForm);
        // return this.http.post(this.sesApiUrl, newEmail, { headers: this.emailHeaders});
        return this.http.post(this.apiGatewayUrl, joinTeamForm);
    }
}