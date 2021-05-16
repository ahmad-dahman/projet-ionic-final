import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuController, NavController } from '@ionic/angular';
import { Appareil } from '../model/appareil';
import { AppareilsService } from '../services/appareils.service';


@Component({
  selector: 'app-single-appareil',
  templateUrl: './single-appareil.page.html',
  styleUrls: ['./single-appareil.page.scss'],
})
export class SingleAppareilPage implements OnInit {

  id: number;
  name:string;
  description:String[];
  isOn:boolean;
  startTime:string;
  endTime:string;
  appareil:any;

  
  constructor(private navCtrl: NavController, private route: ActivatedRoute,
    private router: Router, private http:HttpClient, private menu: MenuController,
     public service:AppareilsService ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params["id"];
    this.service.getAppareil(this.id).subscribe((response) =>{
      this.name = response.name;
      this.description = response.description;
      this.isOn = response.isOn;
      this.startTime = response.startTime;
      this.endTime = response.endTime

    })
  }

  onToggleAppareil() {
    this.isOn = !this.isOn;
    this.appareil={id:this.id,name:this.name,description:this.description,isOn:this.isOn,startTime:this.startTime,endTime:this.endTime}
    this.service.updateAppareil(this.id,this.appareil).subscribe(
      response => console.log(response))

  }

  openMenu() {
    this.menu.open();
  }

  onSubmitForm(form: NgForm) {
    this.appareil={id:this.id,name:this.name,description:this.description,isOn:this.isOn,startTime:form.value.startTime,endTime:form.value.endTime}
    this.service.updateAppareil(this.id,this.appareil).subscribe(response => console.log(response))
      this.navCtrl.navigateForward("/appareils");

  }
  
    
  onUpdateAppareil(id:number){
    console.log(id)
    this.navCtrl.navigateForward("/update-appareil/"+id)
  }


onDeleteHours() {
    this.startTime = '';
    this.endTime = '';
    this.appareil={id:this.id,name:this.name,description:this.description,isOn:this.isOn,startTime:this.startTime,endTime:this.endTime}
    this.service.updateAppareil(this.id,this.appareil).subscribe(
      response => console.log(response))
    this.navCtrl.navigateForward("appareils");
}

onDeleteAppareil(id:number){
  this.service.deleteAppareil(this.id).subscribe(
    response => console.log(response));
  this.navCtrl.navigateForward("/appareils");

}

}
