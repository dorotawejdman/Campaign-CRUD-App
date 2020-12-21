import { Component, OnInit } from '@angular/core';
import { CampaignService } from '../share/campaign.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: []
})
export class AccountComponent implements OnInit {

  constructor(public service: CampaignService) { }

  ngOnInit() {
  }

}
