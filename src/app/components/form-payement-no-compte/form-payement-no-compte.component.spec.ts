import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPayementNoCompteComponent } from './form-payement-no-compte.component';

describe('FormPayementNoCompteComponent', () => {
  let component: FormPayementNoCompteComponent;
  let fixture: ComponentFixture<FormPayementNoCompteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormPayementNoCompteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormPayementNoCompteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
