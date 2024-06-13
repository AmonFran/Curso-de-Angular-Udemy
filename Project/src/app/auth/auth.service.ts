import { Injectable } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";

@Injectable()
export class AuthService {
    token: string;
    constructor(private router: Router, private route: ActivatedRoute) {

    }
    signupUser(email: string, password: string) {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password).catch(
            error => console.log(error)
        );
        this.router.navigate(['/']);
    }
    signinUser(email: string, password: string) {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                this.router.navigate(['/']);
                userCredential.user.getIdToken().then(
                    (token: string) => this.token = token
                );
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode);
                console.log(errorMessage)
            });
    }
    logOut() {

        signOut(getAuth()).then(
            () => {
                // console.log("asdas")
            }
        ).catch(
            (error) => {
                console.log(error);
            }
        )
        this.token = null as unknown as string;
    }
    getToken() {
        getAuth().currentUser?.getIdToken().then(
            (token: string) => this.token = token
        );
        return this.token;
    }
    isAuthenticated() {
        return this.token != null;
    }
}