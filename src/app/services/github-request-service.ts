import { Injectable, signal } from '@angular/core';
import { Octokit } from '@octokit/rest';
import { GithubProfileModel } from '../models/github-profile';
import { ErrorMessage } from '../models/error';

@Injectable({
  providedIn: 'root',
})
export class GithubRequestService {

  private octokit = new Octokit();


  public async getUserInformation(username: string) {

    var response = await this.octokit.request('GET /users/{username}', {
      username: username,
      headers: {
        'X-GitHub-Api-Version': '2022-11-28'
      }
    });

    return response.data;

  }

  public async getRepositoryLanguages(owner: string, repository: string){

    var response = await this.octokit.request('GET /repos/{owner}/{repo}/languages', {
      owner: owner,
      repo: repository,
      headers: {
        'X-GitHub-Api-Version': '2022-11-28'
      }
    });

    return response.data;

  }

  public async getUserRepositories(username: string) {
    var response = await this.octokit.request('GET /users/{username}/repos', {
      username: username,
      headers: {
        'X-GitHub-Api-Version': '2022-11-28'
      }
    });

    return response.data;
  }

}
