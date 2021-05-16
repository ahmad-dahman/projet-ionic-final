import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MenuController, NavController } from '@ionic/angular';
import { Appareil } from '../model/appareil';
import { AppareilsService } from '../services/appareils.service';

@Component({
  selector: 'app-appareil-form',
  templateUrl: './appareil-form.page.html',
  styleUrls: ['./appareil-form.page.scss'],
})
export class AppareilFormPage implements OnInit {

  appareilForm: FormGroup;
  constructor(private menu: MenuController, private formBuilder: FormBuilder,private nav: NavController, private service: AppareilsService) {}

  ngOnInit() {
    this.initForm();
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
  let newAppareil = new Appareil(this.appareilForm.get('name').value,description);
  this.service.createAppareil(newAppareil).subscribe((response) =>{
    console.log (response)
    this.nav.navigateForward('appareils')
  }
  );
}

}
