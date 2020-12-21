import { Component, OnInit } from '@angular/core';
import { Campaign } from '../share/campaign';
import { CampaignService } from '../share/campaign.service';

@Component({
  selector: 'app-campaign-list',
  templateUrl: './campaign-list.component.html',
  styleUrls: ['./campaign-list.component.sass']
})
export class CampaignListComponent implements OnInit {

  constructor(public service: CampaignService) { }

  ngOnInit() {
  }
  //on edit-button click
  editCampaign(item: Campaign){
    //put edited Campaign details into form
    this.service.inputCampaign = Object.assign({},item);
  }
  //on delete-button click
  deleteCampaign(item: Campaign){
    this.service.deleteCampaign(item.ID);
  }
}
