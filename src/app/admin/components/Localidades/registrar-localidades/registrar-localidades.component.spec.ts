import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarLocalidadesComponent } from './registrar-localidades.component';

describe('RegistrarLocalidadesComponent', () => {
  let component: RegistrarLocalidadesComponent;
  let fixture: ComponentFixture<RegistrarLocalidadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarLocalidadesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarLocalidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
