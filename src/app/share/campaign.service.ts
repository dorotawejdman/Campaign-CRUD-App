import { Injectable } from '@angular/core';
import { Campaign } from './campaign';

@Injectable({
  providedIn: 'root'
})
export class CampaignService {

  //Object to collect data from form
  inputCampaign: Campaign;
  //List of all ceated campaigns
  campaigns: Campaign[] = [];
  //Total amount of money to spend 
  totalBudget: number = 5000;
  //Cost of all Campaigns
  totalCost: number = 0;
  
  constructor() { }

  //Get id of the item in campaigns list 
  find(ID){
    return this.campaigns.findIndex( (el) => el.ID===ID )
  }
  //Add new campaign
  postCampaign(inputCampaign : Campaign){
    if(this.campaigns.length){
      inputCampaign.ID = this.campaigns[this.campaigns.length-1].ID + 1;
    }
    else{
      inputCampaign.ID = 1;
    }
    (this.campaigns).push(inputCampaign);
    //Update budget
    this.countBudget(); 
  }
  //Edit existing campaign
  editCampaign(inputCampaign : Campaign){
    let id = this.find(inputCampaign.ID)
    this.campaigns[id]= Object.assign({},inputCampaign)
    this.countBudget();
  }
  //Delete campaign
  deleteCampaign(id){
    this.campaigns.splice(this.find(id),1)
    this.countBudget();
    console.log(this.campaigns)
  }
  //Update budget based on current campaigns list
  countBudget(){
    this.totalCost = 0;
    this.campaigns.forEach(el=>{
      if(el.Status==true){
        this.totalCost = this.totalCost + el.CampaignFund;
      }
    this.totalBudget = 5000 - this.totalCost;
    })
  }

}
