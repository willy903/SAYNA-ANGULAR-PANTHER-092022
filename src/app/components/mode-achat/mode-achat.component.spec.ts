import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeAchatComponent } from './mode-achat.component';

describe('ModeAchatComponent', () => {
  let component: ModeAchatComponent;
  let fixture: ComponentFixture<ModeAchatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModeAchatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModeAchatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
