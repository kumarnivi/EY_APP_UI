import { Component } from '@angular/core';

@Component({
  selector: 'app-add-subadmin',
  templateUrl: './add-subadmin.component.html',
  styleUrls: ['./add-subadmin.component.scss']
})
export class AddSubadminComponent {

  

  participate = [
    {
      participateImg: '../../../assets/woman-128.png',
      logo: '../../../assets/secure-shield.png',
      name: 'Annete black',
      btn: 'Administrator',
    },
    {
      participateImg: '../../../assets/woman-128.png',
      logo: '../../../assets/secure-shield.png',
      name: 'Rahlp edwards',
      btn: 'Sub Admin',
    },
    {
      participateImg: '../../../assets/woman-128.png',
      logo: '../../../assets/secure-shield.png',
      name: 'rehunu',
      btn: 'Sub Admin',
    },
   
   
  ];
}
