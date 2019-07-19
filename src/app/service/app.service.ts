import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class HttpService {
    public url: string='http://localhost:3333' ;
    constructor(public http: HttpClient) {}
    get(urlTail: string, success: Function, fail?: Function ): void {
      this.http.get(this.url + urlTail).
      subscribe(res => {
        //console.log(res);
        success(res);
      },
        error=>{
          //console.log(error);
          fail(error);
        });
    }
}
