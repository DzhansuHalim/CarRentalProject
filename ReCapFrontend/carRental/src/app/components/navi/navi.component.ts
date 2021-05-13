import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit {

  setLogin = true;
  setLogout = false;

  constructor() { }

  ngOnInit(): void {
    this.check();
  }
  check(){
    if(localStorage.getItem("token") == null){
      this.setLogin = true;
      this.setLogout = false; 
    }
    else{
      this.setLogin = false;
      this.setLogout = true; 
    }
  }

  logout(){
   localStorage.clear();
  }

}
