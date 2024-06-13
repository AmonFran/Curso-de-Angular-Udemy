import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs";
@Injectable()
export class ServerService {
    constructor(private http: HttpClient) {

    }
    storeServer(servers: any) {
        const encabezado = new HttpHeaders({
            'Content-type': 'application/json'
        })
        // return this.http.post('https://prueba-http-e208f-default-rtdb.europe-west1.firebasedatabase.app/data.json', servers, {
        //     headers: encabezado
        // });
        return this.http.put('https://prueba-http-e208f-default-rtdb.europe-west1.firebasedatabase.app/data.json', servers, {
            headers: encabezado
        });
    }
    getServers() {
        return this.http.get('https://prueba-http-e208f-default-rtdb.europe-west1.firebasedatabase.app/data.json').pipe(
            map(
                (response: any) => {
                    const data = response;
                    for (const server of data) {
                        server.name = 'FETCHED_' + server.name
                    }
                    return data;
                }
            )
        );
    }
    getAppName() {
        return this.http.get('https://prueba-http-e208f-default-rtdb.europe-west1.firebasedatabase.app/appName.json').pipe(
            map(
                (response: any) => {
                    const data = response;
                    return data;
                }
            )
        );;
    }
}