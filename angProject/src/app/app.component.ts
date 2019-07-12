import { Component, OnInit } from '@angular/core';
import { AppService } from '../app-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sampleApp';
  resData: any;
  constructor(private appS: AppService) {
    this.appS.fetchData().subscribe((res) => {
          this.resData = JSON.stringify(res);
        });
  }

  ngOnInit() {
    this.appService.fetchData().subscribe((res) => {
      this.resData = JSON.stringify(res);
    })
  }

}
