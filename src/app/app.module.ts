import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CampaignFormComponent } from './campaign-form/campaign-form.component';
import { CampaignListComponent } from './campaign-list/campaign-list.component';
import { CampaignService } from './share/campaign.service';
import { FormsModule } from "@angular/forms";
import { AccountComponent } from './account/account.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

@NgModule({
  declarations: [			
    AppComponent,
      CampaignFormComponent,
      CampaignListComponent,
      AccountComponent
   ],
  imports: [
    BrowserModule,
    FormsModule,
    NgMultiSelectDropDownModule.forRoot()
  ],
  providers: [CampaignService],
  bootstrap: [AppComponent]
})
export class AppModule { }
