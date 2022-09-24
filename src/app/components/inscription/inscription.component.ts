import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';


/**
 *
 * @param form
 */

function passwordsMatchValidator(form:any){
  const password = form.get('password');
  const confirmPassword = form.get('confirmPassword');

  if(password.value !== confirmPassword.value){
    confirmPassword.setErrors({passwordsMatch: true})
  }
  else{
    confirmPassword.setErrors(null)
  }

  return null;
}
@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})

export class InscriptionComponent implements OnInit {
  public signupForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private http:HttpClient, private router:Router) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      nom: ['', Validators.required],
      prenom: ['',Validators.required],
      email:['',Validators.required],
      password:['', Validators.required],
      confirmPassword:''
    },{
      validators: passwordsMatchValidator
    })
  }

  signUp(){
   this.http.post<any>('http://localhost:3000/user',this.signupForm.value)
   .subscribe((res)=>{
    alert('C\'est bien enregistre');
    this.signupForm.reset();
    this.router.navigateByUrl('connection');
   });
  }
}
