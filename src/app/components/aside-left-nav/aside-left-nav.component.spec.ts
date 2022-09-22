import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideLeftNavComponent } from './aside-left-nav.component';

describe('AsideLeftNavComponent', () => {
  let component: AsideLeftNavComponent;
  let fixture: ComponentFixture<AsideLeftNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsideLeftNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsideLeftNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
