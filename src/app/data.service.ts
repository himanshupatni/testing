import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError} from 'rxjs/operators';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  i = 0;
  constructor(private http: HttpClient) { }
  firstClick() {
    console.log("again you kicked my ass");
    this.i++;
    console.log(this.i);


  }

  getUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
    .pipe(catchError(this.errorHandler));

  }
  errorHandler(error:  HttpErrorResponse){
    return Observable.throw(error.message || "Server Error")

  }
}
