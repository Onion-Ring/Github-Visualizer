import { Component, input, OnInit, signal } from '@angular/core';
import { RepositoryModel } from '../../../models/repository';
import { DatePipe,DecimalPipe } from '@angular/common';
import { RepositoryLanguageModel } from '../../../models/repository-language';
import { GithubRequestService } from '../../../services/github-request-service';

@Component({
  selector: 'app-repository',
  imports: [DatePipe,DecimalPipe],
  templateUrl: './repository.html',
  styleUrl: './repository.css',
})
export class Repository {
  repo = input.required<RepositoryModel>();
}
