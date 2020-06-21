import { Component, Input } from '@angular/core';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  arr: any;
  arraydata: any = [];
  isdisplay = false;
  isfinal = false;
  username : any =[];
  password : any = [];
  cnt: any;
  cnt1: any;
  alert: boolean = true; 
  onSubmit(it: NgForm) {
    this.arr = it.value;
    this.arraydata.push(JSON.stringify( this.arr));
    console.log("array" + this.arraydata);
    console.log(JSON.stringify( it.value));
    
  } 
  
  toggle(it) {
    const mapped = Object.keys(it.value).map(key => ({type: key, value:it.value[key]}));
    console.log("mapped" +mapped);
    for(let data of mapped) {
      if (data.type == 'first') {
        this.username.push(data.value);
      }
      if (data.type == "password") {
        this.password.push(data.value);
      }
      // if(data.type == "password" && data.type == "passwordc") {

      // }
     
      //console.log("user" + this.username);
    }
  
    this.isdisplay = true;
  } 

  show(it) {
    const mapped = Object.keys(it.value).map(key => ({type: key, value:it.value[key]}));
    for(let datas of mapped) {
      for (let data1 of this.username) {
        for (let data2 of this.password) {
          if(datas.type == "first") {
            if (datas.value ==data1) {
              console.log("present");
              this.cnt = 1;
            }
          }
          if(datas.type == "password") {
            if(datas.value == data2) {
              console.log("prsent");
              this.cnt1 = 1;
            }
          }
        }
      }
    }
    if(this.cnt == 1 && this.cnt1 == 1) {
      this.isfinal = true;
      this.alert = true;
    }
    else {
      this.alert = false;
      it.reset();
    }
  }
  title = 'login-register';
}
