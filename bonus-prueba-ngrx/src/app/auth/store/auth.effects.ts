import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, Effect, createEffect, ofType } from '@ngrx/effects';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { from, map, mergeMap, switchMap, tap } from "rxjs";
import * as AuthActions from './auth.actions';

@Injectable()
export class AuthEffects {
    authSignup = createEffect(() =>
        this.actions$
            .pipe(
                ofType(
                    AuthActions.TRY_SIGNUP
                ),
                map(
                    (action: AuthActions.TrySignup) => {
                        return action.payload;
                    }
                ),
                switchMap(
                    (authData: { username: string, password: string }) => {
                        const auth = getAuth();
                        return from(createUserWithEmailAndPassword(auth, authData.username, authData.password));
                    }
                ),
                switchMap(
                    (userCredential) => {
                        return from(userCredential.user.getIdToken());
                    }
                ),
                mergeMap(
                    (token: string) => {
                        this.router.navigate(['/'])
                        return [
                            {
                                type: AuthActions.SIGNUP
                            },
                            {
                                type: AuthActions.SET_TOKEN,
                                payload: token,
                            }
                        ]
                    }
                )
            )
    )
    authSignIn = createEffect(() =>
        this.actions$
            .pipe(
                ofType(
                    AuthActions.TRY_SIGNIN
                ),
                map(
                    (action: AuthActions.TrySignup) => {
                        return action.payload;
                    }
                ),
                switchMap(
                    (authData: { username: string, password: string }) => {
                        const auth = getAuth();
                        return from(signInWithEmailAndPassword(auth, authData.username, authData.password));
                    }
                ),
                switchMap(
                    (userCredential) => {
                        return from(userCredential.user.getIdToken());
                    }
                ),
                mergeMap(
                    (token: string) => {
                        this.router.navigate(['/'])
                        return [
                            {
                                type: AuthActions.SIGNIN
                            },
                            {
                                type: AuthActions.SET_TOKEN,
                                payload: token,
                            }
                        ]
                    }
                )
            )

    )
    @Effect({ dispatch: false })
    authLogout = this.actions$
        .pipe(
            ofType(
                AuthActions.LOGOUT
            ),
            tap(
                () => {
                    this.router.navigate(['/']);
                }
            )
        )

    constructor(private actions$: Actions, private router: Router,) {

    }
}