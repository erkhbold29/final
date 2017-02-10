import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { User } from '../_models/index';

@Injectable()
export class UserService {
	private actionUrl: string = 'http://localhost:8080/api/users';

    constructor(private http: Http) { }

    getAll() {
        return this.http.get(this.actionUrl, this.jwt()).map((response: Response) => response.json());
    }

    getById(id: number) {
        return this.http.get(this.actionUrl + '/' + id, this.jwt()).map((response: Response) => response.json());
    }

    create(user: User) {
        return this.http.post(this.actionUrl, user, this.jwt()).map((response: Response) => response.json());
    }

    update(user: User) {
        return this.http.put(this.actionUrl + '/' + user.id, user, this.jwt()).map((response: Response) => response.json());
    }

    delete(id: number) {
        return this.http.delete(this.actionUrl + '/' + id, this.jwt()).map((response: Response) => response.json());
    }

    // private helper methods

   private jwt() {
        // create authorization header with jwt token
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
            return new RequestOptions({ headers: headers });
        }
    }
}