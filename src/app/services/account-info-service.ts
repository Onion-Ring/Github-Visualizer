import { Injectable, signal } from '@angular/core';
import { GithubProfileModel } from '../models/github-profile';
import { RepositoryModel } from '../models/repository';

@Injectable({
  providedIn: 'root',
})
export class AccountInfoService {

  private githubProfile = signal<GithubProfileModel>(new GithubProfileModel());
  private githubRepos = signal<RepositoryModel[]>([]);  

  getGithubProfile() {
    return this.githubProfile;
  }

  getGithubRepos(){
    return this.githubRepos;
  }

  public setGithubProfileInformation(responseData: any) {
    this.githubProfile().setAvatarUrl(responseData.avatar_url);
    this.githubProfile().setUser(responseData.login);
    this.githubProfile().setRealName(responseData.name ?? "");
    this.githubProfile().setUserBio(responseData.bio ?? "");
    this.githubProfile().setCreatedAt(responseData.created_at);
    this.githubProfile().setUserEmail(responseData.email ?? "");
    this.githubProfile().setFollowers(responseData.followers);
    this.githubProfile().setFollowing(responseData.following);
    this.githubProfile().setHtmlUrl(responseData.html_url);
  }

  public setGithubRepositoriesInfo(responseData: any[]){
        
   const repos =  responseData.map(element => {      
      const repo = new RepositoryModel();
      repo.setName(element.name);
      repo.setFullName(element.full_name);
      repo.setUrl(element.html_url);
      repo.setFork(element.fork);      
      repo.setCreatedAt(element.created_at);
      repo.setUpdatedAt(element.updated_at);
      repo.setPushedAt(element.pushed_at);               
      return repo;
    });

    this.githubRepos.set(repos);

  }




}
