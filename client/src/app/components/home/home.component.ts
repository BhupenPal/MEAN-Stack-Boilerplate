import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
  }

  ApiCheck(){
    this.http.get('/api/')
    .subscribe( data => {  
      document.getElementById('progress').style.width = '100%';
      document.getElementById('jcode').innerHTML = `${JSON.stringify(data, undefined, 3)}`;
    })
  }

}
