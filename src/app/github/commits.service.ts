import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";


@Injectable()
export class CommitsService {

  constructor(private http: HttpClient) { }

  getCommits(repo: string): Observable<any> {
    const url = `http://localhost:3000/github/commits/man-machine`

    return this.http.get(url);
  }
}
