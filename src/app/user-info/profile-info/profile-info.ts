import { Component, effect, inject, signal } from '@angular/core';
import { GithubRequestService } from '../../services/github-request-service';
import { GithubProfileModel } from '../../models/github-profile';
import { DatePipe, NgIf } from '@angular/common';
import { AccountInfoService } from '../../services/account-info-service';
import { ErrorService } from '../../services/error-service';

@Component({
  selector: 'app-profile-info',
  imports: [DatePipe],
  templateUrl: './profile-info.html',
  styleUrl: './profile-info.css',
})
export class ProfileInfo {
  
  accountService = inject(AccountInfoService);  
  githubProfile = this.accountService.getGithubProfile();  
  errorService = inject(ErrorService);
  animated = signal<boolean>(false);

  ngOnInit() {        
    this.errorService.setErrorMessage({statusCode:undefined,message:undefined})
  }

  constructor(){
    
    effect(() => {
      // necessary to read the signal, otherwise the change won't be triggered here
      const user = this.githubProfile().getUser();
      this.triggerAnimation(user);
    });
    

  }

  triggerAnimation(user:string) {
    if(user !== undefined && user.length > 0){
      this.animated.set(false);
      requestAnimationFrame(() => {
        this.animated.set(true);
      });
    }      
  };
}


