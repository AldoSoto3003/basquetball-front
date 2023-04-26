import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistraredicionesComponent } from './registrarediciones.component';

describe('RegistraredicionesComponent', () => {
  let component: RegistraredicionesComponent;
  let fixture: ComponentFixture<RegistraredicionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistraredicionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistraredicionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
