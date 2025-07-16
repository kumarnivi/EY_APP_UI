import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LeaveService } from '../../leave.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  mode: 'login' | 'register' = 'login';

  loginData = {
    email: '',
    password: ''
  };

  registerData = {
    username: '',
    email: '',
    password: '',
    role: 'user'
  };

  constructor(
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private router: Router,
    private authService: LeaveService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const modeParam = params.get('mode');
      this.mode = modeParam === 'register' ? 'register' : 'login';
    });
  }

 
login(): void {
  this.authService.login(this.loginData).subscribe({
    next: (res) => {
      localStorage.setItem('token', res.token);
      localStorage.setItem('role', res.user.role); 
      this.toastr.success('Login successful',);
      // Role base Navigation
      if (res.user.role === 'admin') {
        this.router.navigate(['/admin']);
      } else if (res.user.role === 'manager') {
        this.router.navigate(['/manager']);
      } else {
        this.router.navigate(['/home']);
      }
    },
    error: (err) => {
      this.toastr.error(err.error.message || 'Login failed');
    }
  });
}

register(): void {
  this.authService.register(this.registerData).subscribe({
    next: () => {
      this.toastr.success('Registered successfully! Please login.');
      this.router.navigate(['/auth/login']);
    },
    error: (err) => {
      this.toastr.error(err.error.message || 'Registration failed');
    }
  });
}
}
