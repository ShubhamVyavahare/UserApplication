import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  updateUser = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl('')
  })

  alert: boolean = false;

  get firstName() { return this.updateUser.get('firstName') };
  get lastName() { return this.updateUser.get('lastName') };
  get email() { return this.updateUser.get('email') };
  get address() { return this.updateUser.get('address') };

  constructor(private router: ActivatedRoute, private service: UserService) { }

  ngOnInit(): void {
    this.service.getCurrentUser(this.router.snapshot.params.email).subscribe((result) => {
      this.updateUser = new FormGroup({
        firstName: new FormControl(result['firstName']),
        lastName: new FormControl(result['lastName']),
        email: new FormControl(result['email']),
        address: new FormControl(result['address'])
      })
    })
  }

  onUpdate() {
    this.service.updateUser(this.router.snapshot.params.email, this.updateUser.value).subscribe((result) => {
      console.warn(result)
    })
    this.alert = true
    this.updateUser.reset({});
  }

  closeAlert() {
    this.alert = false;
  }

}
