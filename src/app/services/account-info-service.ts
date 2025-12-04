import { Injectable } from '@angular/core';
import { GithubProfileModel } from '../models/github-profile';
import { RepositoryModel } from '../models/repository';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AccountInfoService {

  private githubProfile = new GithubProfileModel();
  private githubReposSubject = new BehaviorSubject<RepositoryModel[]>([]);
  githubRepos$ = this.githubReposSubject.asObservable();

  getGithubProfile() {
    return this.githubProfile;
  }

  public setGithubProfileInformation(responseData: any) {
    this.githubProfile.setAvatarUrl(responseData.avatar_url);
    this.githubProfile.setUser(responseData.login);
    this.githubProfile.setRealName(responseData.name ?? "");
    this.githubProfile.setUserBio(responseData.bio ?? "");
    this.githubProfile.setCreatedAt(responseData.created_at);
    this.githubProfile.setUserEmail(responseData.email ?? "");
    this.githubProfile.setFollowers(responseData.followers);
    this.githubProfile.setFollowing(responseData.following);
    this.githubProfile.setHtmlUrl(responseData.html_url);
  }

  public setGithubRepositoriesInfo(responseData: any[]){
        
   var repos : RepositoryModel[] = [];   

   repos =  responseData.map(element => {      
      const repo = new RepositoryModel();
      repo.setName(element.name);
      repo.setFullName(element.full_name);
      repo.setUrl(element.url);
      repo.setFork(element.fork);      
      repo.setCreatedAt(element.created_at);
      repo.setUpdatedAt(element.updated_at);
      repo.setPushedAt(element.pushed_at);               
      return repo;
    });

    this.githubReposSubject.next(repos);

  }




}
