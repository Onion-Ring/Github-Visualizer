import { Injectable } from '@angular/core';
import { ErrorMessage } from '../models/error';

@Injectable({
  providedIn: 'root',
})
export class ErrorService {
  
  private errorMsg! : ErrorMessage;


  public getErrorMessage(){
    return this.errorMsg;
  }

  public setErrorMessage(error: ErrorMessage){
    this.errorMsg = error;
  }


}
