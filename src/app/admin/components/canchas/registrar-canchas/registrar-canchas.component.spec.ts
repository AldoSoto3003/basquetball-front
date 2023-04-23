import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarCanchasComponent } from './registrar-canchas.component';

describe('RegistrarCanchasComponent', () => {
  let component: RegistrarCanchasComponent;
  let fixture: ComponentFixture<RegistrarCanchasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarCanchasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarCanchasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
