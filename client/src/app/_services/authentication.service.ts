import { Injectable, NgZone } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { tokenNotExpired } from 'angular2-jwt';
import 'rxjs/add/operator/map';
declare var Auth0Lock: any;

@Injectable()
export class AuthenticationService {
	private actionUrl: string = 'http://localhost:8080/api/authenticate';
	
	currentUser:Object;
	constructor(private ngZ:NgZone, private http: Http) {
		this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
		console.log(this.currentUser);
	}
	

    login(username: string, password: string) {
        return this.http.post(this.actionUrl,{ username: username, password: password })
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
				let responseDetail = response.json();
			console.log(responseDetail);

				if(responseDetail.success == true ){
					if (responseDetail && responseDetail.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(responseDetail));
					}
				}else{
					throw new Error(responseDetail.message);
				}
				
            });
			
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
	
	public nearMe() {
		return new Promise((resolve, reject) => {
			function success(position) {
	            resolve({
	                lat: position.coords.latitude,
	                lng: position.coords.longitude,
	            });
	        }
        	navigator.geolocation.getCurrentPosition(success, reject);

		});
	}
	

	public authenticated() {
		return tokenNotExpired();
	}
}