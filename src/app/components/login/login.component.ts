import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  formulario: FormGroup


  constructor(private userService: UsersService,
    private router: Router) {

    this.formulario = new FormGroup({


      email: new FormControl(),
      password: new FormControl(),


    })

  }

  async onSubmit() {

    const response = await this.userService.login(this.formulario.value);

    const { token } = response;

    localStorage.setItem('tokenPotter', token)

    this.router.navigate(['/movies']);
  }

}
