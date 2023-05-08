import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrartorneocanchasComponent } from './registrartorneocanchas.component';

describe('RegistrartorneocanchasComponent', () => {
  let component: RegistrartorneocanchasComponent;
  let fixture: ComponentFixture<RegistrartorneocanchasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrartorneocanchasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrartorneocanchasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
