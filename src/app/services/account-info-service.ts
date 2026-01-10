import { Injectable, signal } from '@angular/core';
import { GithubProfileModel } from '../models/github-profile';
import { RepositoryModel } from '../models/repository';
import { GithubRequestService } from './github-request-service';
import { RepositoryLanguageModel } from '../models/repository-language';

@Injectable({
  providedIn: 'root',
})
export class AccountInfoService {

  private githubProfile = signal<GithubProfileModel>(new GithubProfileModel());
  private githubRepos = signal<RepositoryModel[]>([]);

  private githubRequestService = new GithubRequestService();

  constructor(githubRequestService: GithubRequestService) {
    this.githubRequestService = githubRequestService;
  }

  getGithubProfile() {
    return this.githubProfile;
  }

  getGithubRepos() {
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

  public async setGithubRepositoriesInfo(responseData: any[]) {

    const repos =  responseData.map(element => {
      const repo = new RepositoryModel();
      
      repo.setName(element.name);
      repo.setFullName(element.full_name);
      repo.setUrl(element.html_url);
      repo.setFork(element.fork);
      repo.setCreatedAt(element.created_at);
      repo.setUpdatedAt(element.updated_at);
      repo.setPushedAt(element.pushed_at);
      repo.setOwnerName(element.owner.login);            
      return repo;
    });

    for(var i = 0; i < repos.length; i++){
      
      var languages: RepositoryLanguageModel[] = [];
      languages = await this.getRepositoryLanguages(repos[i].getOwnerName(), repos[i].getName());

      var totalPercentage = languages.reduce( (total,item) => total+ item.getUsePercentage(),0);

      for (var j = 0; j < languages.length; j++){
        languages[j].setUsePercentage( (languages[j].getUsePercentage() * 100) / totalPercentage)
      }

      repos[i].setRepositoryLanguages(languages);
    }

    this.githubRepos.set(repos);

  }

  public async getRepositoryLanguages(owner: string, repo: string): Promise<RepositoryLanguageModel[]> {

    var language: RepositoryLanguageModel = new RepositoryLanguageModel();
    var languages: RepositoryLanguageModel[] = [];
    var responseData: {
      [key: string]: number;
    };

    responseData = await this.githubRequestService.getRepositoryLanguages(owner, repo);

    for (var languageData in responseData) {
      language.setUsePercentage(responseData[languageData]);
      language.setName(languageData);
      languages.push(language);
      language = new RepositoryLanguageModel();
    }
    return languages;

  }




}
