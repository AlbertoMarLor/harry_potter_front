import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  formulario: FormGroup


  constructor(private userService: UsersService,
    private router: Router) {

    this.formulario = new FormGroup({

      username: new FormControl(),
      email: new FormControl(),
      password: new FormControl(),
      role: new FormControl()

    })

  }

  async onSubmit() {
    await this.userService.create(this.formulario.value);
    this.router.navigate(['/movies']);
  }

}
