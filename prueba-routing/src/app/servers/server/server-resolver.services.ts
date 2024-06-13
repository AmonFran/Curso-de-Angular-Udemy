import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { ServersService } from "../servers.service";
import { Injectable } from "@angular/core";

interface Server {
    id: number;
    name: string;
    status: string;
}

@Injectable()
export class ServerResolver implements Resolve<Server> {
    constructor(private serversService: ServersService) {

    }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): 
    //Otra vez problemas si en vez de Any pongo server
    Observable<any> | Promise<any> | any {
        return this.serversService.getServer(+route.params['id']);
    }
}