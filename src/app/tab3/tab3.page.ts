import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
myStatus:string
long:number;
lat:number;
  constructor(private storage:Storage, private geolocation:Geolocation) {}

  locationMethod(){
    this.geolocation.getCurrentPosition().then((resp) => {
     this.lat = resp.coords.latitude;
     this.long = resp.coords.longitude;
     }).catch((error) => {
       console.log('Error getting location', error);
     });
  }




  ngOnInit(){
    this.storage.get("status").then(
      (data)=>{
        this.myStatus = data;
      }
    ).catch(
      (error)=>{
        console.log(error);
      }
    )
  }

}
