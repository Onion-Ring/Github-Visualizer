import { Component, input, OnInit, signal } from '@angular/core';
import { RepositoryModel } from '../../../models/repository';
import { DatePipe } from '@angular/common';
import { RepositoryLanguageModel } from '../../../models/repository-language';
import { GithubRequestService } from '../../../services/github-request-service';

@Component({
  selector: 'app-repository',
  imports: [DatePipe],
  templateUrl: './repository.html',
  styleUrl: './repository.css',
})
export class Repository implements OnInit {

  repoLanguages = signal<RepositoryLanguageModel[]>([]);
  repo = input.required<RepositoryModel>();
  githubRequestService = new GithubRequestService();

  // DI
  constructor(githubRequestService:GithubRequestService){
    this.githubRequestService = githubRequestService;
  }

  ngOnInit(): void {
    
    this.getRepositoryLanguages();


  }

  
  private async getRepositoryLanguages() {
    
    var language : RepositoryLanguageModel = new RepositoryLanguageModel();

    var responseData: {
      [key: string]: number;
    };

    responseData = await this.githubRequestService.getRepositoryLanguages(this.repo().getOwnerName(),this.repo().getName());

    for(var languageData in responseData){
      
      language.setUsePercentage(responseData[languageData]);
      language.setName(languageData);

      this.repoLanguages().push(language);

    }


  }
    
}
