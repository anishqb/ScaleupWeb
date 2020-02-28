import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { ApiResponse } from '../Model/api.response';
import { Observable } from 'rxjs';


import qstnJson from '../../assets/Questions.json'


@Injectable()
export class ApiService {

    constructor(private http: HttpClient) { }

    baseUrl: string = 'http://localhost:8080/';
    yy:ApiResponse;

    getQuestions(): Observable<ApiResponse> {

        var xx = this.readQuestions();
        var tt: Observable< ApiResponse>;
        var yy:ApiResponse;
        yy.status = 200;
        yy.result = xx;
        yy.url = this.baseUrl;
        return this.http.get<ApiResponse>(this.baseUrl + 'questions');
    }

    login(loginPayload): Observable<ApiResponse> {
        return this.http.post<ApiResponse>('http://localhost:8080/' + 'token/generate-token', loginPayload);
    }

    createUser(loginform): Observable<ApiResponse> {
        return this.http.post<ApiResponse>(this.baseUrl + 'add', loginform);
    }


    //<------------------------------------------------------->//
    // Need to remove when api is completed
    readQuestions():ApiResponse {
        var abc = qstnJson;
        let xx: ApiResponse={
            message:"",
            result:abc,
            status:200,
            url:this.baseUrl

            };
        return xx;
    }
}