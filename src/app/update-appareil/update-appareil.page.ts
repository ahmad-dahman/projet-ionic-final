import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, MenuController, NavController, Platform } from '@ionic/angular';
import { AppareilsService } from '../services/appareils.service';

@Component({
  selector: 'app-update-appareil',
  templateUrl: './update-appareil.page.html',
  styleUrls: ['./update-appareil.page.scss'],
})
export class UpdateAppareilPage implements OnInit {

  appareilForm: FormGroup;
  id: number;
  name:string;
  description:String[];
  isOn:boolean;
  startTime:string;
  endTime:string;
  appareil:any;
  length:any;
  control:any;
  constructor(public plt: Platform, private menu: MenuController,private route: ActivatedRoute, private formBuilder: FormBuilder,
    private navCtrl: NavController, private service: AppareilsService) {}

  ngOnInit() {
    this.initForm();
    this.id = this.route.snapshot.params["id"];
    this.service.getAppareil(this.id).subscribe((response) =>{
        this.name = response.name;
        this.description = response.description;
        this.isOn = response.isOn;
        this.startTime = response.startTime;
        this.endTime = response.endTime
        this.length = response.description.length
        const FormArray = this.formBuilder.array([          
        ]);
        for(let i=0;i<this.length;i++){
          //this.onAddDescription();
          this.getDescriptionArray().controls.push(new FormControl( this.description[i]))
        }
        console.log(FormArray.value)
  
      })
  }
  newAppareil(): FormGroup {
    return this.formBuilder.group({
      name: '',
      description: this.formBuilder.array([])
    })
  }
  openMenu() {
    this.menu.open();
  }

  initForm() {
    this.appareilForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: this.formBuilder.array([])
    });
  }

  getDescriptionArray() {
    return this.appareilForm.get('description') as FormArray;
}

onAddDescription() {
  let newControl = this.formBuilder.control('');
  this.getDescriptionArray().controls.push(newControl);
}

onRemoveDescription(index: number) {
  this.getDescriptionArray().removeAt(index);
}

onSubmitForm() {
  const description=[];
  for (let control of this.getDescriptionArray().controls) {
    description.push(control.value);
  }
  this.appareil={id:this.id,name:this.appareilForm.get('name').value,description:description,isOn:this.isOn,startTime:this.startTime,endTime:this.endTime}
    this.service.updateAppareil(this.id,this.appareil).subscribe(response => console.log(response))
      this.navCtrl.navigateForward("/appareils");
}


}
