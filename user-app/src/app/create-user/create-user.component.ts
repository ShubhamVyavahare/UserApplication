import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  createUser = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl('')
  })

  alert: boolean = false;

  constructor(private router: ActivatedRoute, private service: UserService) { }

  ngOnInit(): void {
  }

  get firstName() { return this.createUser.get('firstName') };
  get lastName() { return this.createUser.get('lastName') };
  get email() { return this.createUser.get('email') };
  get address() { return this.createUser.get('address') };

  onSubmit() {
    this.service.saveUser(this.createUser.value).subscribe((result) => {
      console.warn(result)
    })
    this.alert = true;
    this.createUser.reset({});
  }

  closeAlert() {
    this.alert = false;
  }

}
