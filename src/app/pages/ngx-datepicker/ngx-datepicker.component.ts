import { Component } from '@angular/core';
import {BsDatepickerModule, BsDatepickerConfig} from 'ngx-bootstrap/datepicker'

@Component({
  selector: 'app-ngx-datepicker',
  standalone: true,
  imports: [BsDatepickerModule],
  templateUrl: './ngx-datepicker.component.html',
  styleUrl: './ngx-datepicker.component.scss'
})
export class NgxDatepickerComponent {

  datePicker !: Partial<BsDatepickerConfig>

  constructor(){
    this.datePicker = Object.assign({}, {
      containerClass: 'theme-red',
      showWeekNumbers: false
    })
  }

}
