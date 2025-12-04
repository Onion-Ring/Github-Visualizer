import { Component, inject } from '@angular/core';
import { GithubRequestService } from '../../services/github-request-service';
import { GithubProfileModel } from '../../models/github-profile';
import { DatePipe } from '@angular/common';
import { AccountInfoService } from '../../services/account-info-service';
import { ErrorService } from '../../services/error-service';

@Component({
  selector: 'app-profile-info',
  imports: [DatePipe],
  templateUrl: './profile-info.html',
  styleUrl: './profile-info.css',
})
export class ProfileInfo {
    
  githubProfile = new GithubProfileModel();
  accountService = inject(AccountInfoService);
  errorService = inject(ErrorService);

  constructor(){
    this.githubProfile = this.accountService.getGithubProfile();
    this.errorService.setErrorMessage({statusCode:undefined,message:undefined})
  }

}
