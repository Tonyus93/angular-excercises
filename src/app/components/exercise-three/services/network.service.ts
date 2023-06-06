import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from 'rxjs';

import { Joke } from "../interfaces/joke.interface";

@Injectable({
    providedIn: 'root'
})
export class NetworkService {
    networkData = new BehaviorSubject<Joke>({icon_url: '', id: '', url: '', value: ''});
    constructor(private http: HttpClient) {}

    getData() {
        this.http.get<Joke>('https://api.chucknorris.io/jokes/random').subscribe(
            (data) => this.networkData.next(data));
    }
}