import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {

  http = inject(HttpClient)
  userList:any[] = []
  ngOnInit(): void {
    this.getAllUser()
  }

  getAllUser(){
    debugger
    this.http.get('https://freeapi.miniprojectideas.com/api/User/GetAllUsers').subscribe((res:any) => {
      this.userList = res.data
    })
  }
}
