import { Component, input } from '@angular/core';
import { RepositoryModel } from '../../../models/repository';
import { DatePipe, DecimalPipe, NgStyle } from '@angular/common';


@Component({
  selector: 'app-repository',
  imports: [DatePipe, DecimalPipe, NgStyle],
  templateUrl: './repository.html',
  styleUrl: './repository.css',
})
export class Repository {
  repo = input.required<RepositoryModel>();
}
