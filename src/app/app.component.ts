import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgxDatepickerComponent } from "./pages/ngx-datepicker/ngx-datepicker.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgxDatepickerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'learn';
}
