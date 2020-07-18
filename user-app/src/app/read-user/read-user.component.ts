import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from "../user.service";

@Component({
  selector: 'app-read-user',
  templateUrl: './read-user.component.html',
  styleUrls: ['./read-user.component.css']
})
export class ReadUserComponent implements OnInit {

  collection:any = [];

  constructor(private service: UserService) { }

  ngOnInit(): void {
    this.service.getAllUsers().subscribe((result) => {
      this.collection = result
    })
  }

  deleteRestaurant(item) {
    this.collection.splice(item-1, 1)
    this.service.deleteUser(item).subscribe((result)=>{
      console.warn(result)
    })
  }

}