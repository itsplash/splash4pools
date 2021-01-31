import { Component, OnInit } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.location.href = 'https://clienthub.getjobber.com/client_hubs/b3778d80-623d-4171-bbaa-2dbd4a06a82a/login/new'
  }

}
