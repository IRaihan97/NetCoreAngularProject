import { Injectable } from "@angular/core";
import {User} from '../_models/user';
import {Resolve, Router, ActivatedRoute, ActivatedRouteSnapshot} from '@angular/router';
import { UserService } from '../_services/user.service';
import { AlertifyService } from '../_services/alertify.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from '../_services/auth.service';


@Injectable()
export class UserEditResolver implements Resolve<User> {
    constructor(private userService: UserService, 
        private router: Router, private alertify: AlertifyService, private aurthService: AuthService){}

    resolve(route: ActivatedRouteSnapshot) : Observable<User> {
        return this.userService.getUser(this.aurthService.decodedToken.nameid).pipe(
            catchError(error => {
                this.alertify.error('Problem your data');
                this.router.navigate(['/users']);
                return of(null);
            })
        )
    }
}