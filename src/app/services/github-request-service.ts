import { Injectable, signal } from '@angular/core';
import { Octokit } from '@octokit/rest';
import { GithubProfileModel } from '../models/github-profile';
import { ErrorMessage } from '../models/error';

@Injectable({
  providedIn: 'root',
})
export class GithubRequestService {

  private octokit = new Octokit();
  private githubProfile = new GithubProfileModel();
  private errorMsg : ErrorMessage = {statusCode:undefined, message:undefined};

  getErrorMsg(){
    return this.errorMsg;
  }

  getGithubProfile() {
    return this.githubProfile;
  }

  public async getUserInformation(username: string) {

    try {

      var response = await this.octokit.request('GET /users/{username}', {
        username: username,
        headers: {
          'X-GitHub-Api-Version': '2022-11-28'
        }
      });

      this.githubProfile.setAvatarUrl(response.data.avatar_url);
      this.githubProfile.setUser(response.data.login);
      this.githubProfile.setRealName(response.data.name ?? "");
      this.githubProfile.setUserBio(response.data.bio ?? "");
      this.githubProfile.setCreatedAt(response.data.created_at);
      this.githubProfile.setUserEmail(response.data.email ?? "");
      this.githubProfile.setFollowers(response.data.followers);
      this.githubProfile.setFollowing(response.data.following);
      this.githubProfile.setHtmlUrl(response.data.html_url);   
      this.errorMsg.statusCode = undefined;
      this.errorMsg.message = undefined;

    } catch (error:any) {      

      this.errorMsg.statusCode = error.response.status;
      this.errorMsg.message = error.response.data.message;        

    }

  }

}
