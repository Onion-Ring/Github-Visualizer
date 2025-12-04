import { Component, input } from '@angular/core';
import { RepositoryModel } from '../../../models/repository';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-repository',
  imports: [DatePipe],
  templateUrl: './repository.html',
  styleUrl: './repository.css',
})
export class Repository {


  repo = input.required<RepositoryModel>();


}
