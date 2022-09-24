import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgClass } from '@angular/common';

/**
 *
 * @param form
 */

@Component({
  selector: 'app-form-payement-no-compte',
  templateUrl: './form-payement-no-compte.component.html',
  styleUrls: ['./form-payement-no-compte.component.css']
})
export class FormPayementNoCompteComponent implements OnInit {
  public payeForm!: FormGroup;
  public livraisonType!:"chronopost";

  constructor(private formBuilder: FormBuilder, private http:HttpClient, private router:Router) { 
  }

  ngOnInit(): void {
    this.payeForm = this.formBuilder.group({
      typeLivraison:[''],
      nom:['',Validators.required],
      prenom:['',Validators.required],
      adresse:['',Validators.required],
      cp:['',Validators.maxLength(3)],
      ville:['',Validators.required],
      tel:['',Validators.maxLength(10)],
      numCarte:['',Validators.maxLength(14)],
      nomCarte:['',Validators.required],
      cvv:['',Validators.maxLength(4)],
      dateExp:['',Validators.required],
      state:[''],
      typePaye:['']
    })
  }
  validPaye(){
    this.http.post<any>('http://localhost:3000/achatSansCompte',this.payeForm.value)
   .subscribe((val)=>{
    alert('C\'est bien enregistre');
    this.router.navigateByUrl('eshop');
   });
  }
}
