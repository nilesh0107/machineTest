import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { user } from './user.model';
import { album } from './album.model';
import { photo } from './photo.model';

@Injectable()
export class JsonService {
	constructor(private http: HttpClient) {}
	
	
	private extractData(user: Response) {
		let body = user;
		console.error("body",body);
		return body || { };
	}
	  
	  getUser(): Observable<any> {
		const url = 'https://jsonplaceholder.typicode.com/users';
		return this.http.get(url).pipe(
		  map(this.extractData));
	  }

	  getAlbum(id:string): Observable<any> {
		const url = 'https://jsonplaceholder.typicode.com/albums?userId=' + id;
		return this.http.get(url).pipe(
		  map(this.extractData));
	  }

	  getPhotos(id:string): Observable<any> {
		const url = 'https://jsonplaceholder.typicode.com/photos?albumId=' + id;
		return this.http.get(url).pipe(
		  map(this.extractData));
	  }
}
