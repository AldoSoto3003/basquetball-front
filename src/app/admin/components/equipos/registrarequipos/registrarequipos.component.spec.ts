import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarequiposComponent } from './registrarequipos.component';

describe('RegistrarequiposComponent', () => {
  let component: RegistrarequiposComponent;
  let fixture: ComponentFixture<RegistrarequiposComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarequiposComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarequiposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
