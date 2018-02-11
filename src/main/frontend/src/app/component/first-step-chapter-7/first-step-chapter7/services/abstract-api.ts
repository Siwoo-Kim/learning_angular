import {Injectable} from "@angular/core";
import {Http, RequestOptionsArgs, Headers} from "@angular/http";

export abstract class AbstractApi {
  /* encapsulating common code relating to http communication */

  requestOptions: RequestOptionsArgs = {};
  readonly dpdUrl: string = 'http://localhost:2403';

  constructor(public http:Http){
    /*  You can edit header information by requestOptionsArgs
     *  Also can configure url, query string parameter, body
     */
    const headers = new Headers();
    this.requestOptions.headers = headers;
  }

  getUrl(url: string):string {
    return this.dpdUrl+url;
  }

  get(url: string){
    return this.http.get(this.getUrl(url), this.requestOptions);
  }

  post(url: string,data: any){
    url = this.getUrl(url);
    return this.http.post(url, data, this.requestOptions);
  }

  put(url: string,data: any){
    url = this.getUrl(url);
    return this.http.put(url, data, this.requestOptions);
  }

  delete(url: string){
    url = this.getUrl(url);
    return this.http.delete(url, this.requestOptions);
  }
}
