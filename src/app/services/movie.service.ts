import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  apiUrl = 'http://www.omdbapi.com/';
  apiKey = environment.omdbApiKey;
  type = 'movie';

  constructor(private http: HttpClient) {}

  getMovies(title: string, page: number) {
    let params = new HttpParams();
    params = params.append('s', title);
    params = params.append('type', this.type);
    params = params.append('apiKey', this.apiKey);
    params = params.append('page', page.toString());
    return this.http.get(this.apiUrl, { params });
  }
}
