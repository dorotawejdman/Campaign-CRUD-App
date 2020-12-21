import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CampaignService } from '../share/campaign.service';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-campaign-form',
  templateUrl: './campaign-form.component.html',
  styleUrls: ['./ng-multiselect.sass','./campaign-form.component.sass'],
  encapsulation: ViewEncapsulation.None
})
export class CampaignFormComponent implements OnInit {

  constructor(public service: CampaignService) { }
  //Keywords list & corresponding Dropdown settings
  dropdownKeywordList = [];
  dropdownKeywordSettings:IDropdownSettings = {};
  //Town list & corresponding Dropdown settings
  dropdownTownList = [];
  dropdownTownSettings:IDropdownSettings = {};

  ngOnInit() {
    //reset form 
    this.resetForm();
    //initialize dropdowns with option list and settings
    this.dropdownKeywordList = ['fun' ,'teenagers' ,'beauty' ,'energy','power', 'motivation', 'team', 'dreams', 'sport','family'];
    this.dropdownKeywordSettings = {
      singleSelection: false,
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 2,
      allowSearchFilter: true
    };
    
    this.dropdownTownList = ['Cracow' ,'Warsaw' ,'Wroclaw' ,'London','Porto', 'Malaga', 'Sri Dźajawardanapura Kotte'];
    this.dropdownTownSettings = {
      singleSelection: true,
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 2,
      allowSearchFilter: true
    };
  }

  //reset form to its initial values
  resetForm( form?: NgForm){
    if(form!=null)
      form.resetForm();
    //setting initial values for Campaign Form Input
    this.service.inputCampaign={
      Name : "",
      Keywords : [],
      BidAmount : null,
      CampaignFund : null,
      Town : "",
      Radius : null,
      Status : false,
      ID : null
    }
  }
  //activate on form submit
  onSubmit(form: NgForm){
    //if form. value doesnt have ID then add new Campaign (postCampaign)
    if(form.value.ID==null){
      this.service.postCampaign(form.value);
    }
    //else (form.value has ID then edit existing Campaign)
    else{
      this.service.editCampaign(form.value)
    }
    //reset form after submit
    this.resetForm(form);
  }
}
