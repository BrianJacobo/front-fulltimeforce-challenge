import { Component, OnInit } from '@angular/core';
import { CommitsService } from './github/commits.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  commits: any;
  constructor(private commitsService: CommitsService) { }

  ngOnInit() {
    this.commitsService.getCommits('man-machine')
      .subscribe(data => {
        console.log('data', data)
        this.commits = data;
      }
      );
  }
}
