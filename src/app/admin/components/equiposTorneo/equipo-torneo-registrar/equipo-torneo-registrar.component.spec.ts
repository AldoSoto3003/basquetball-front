import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipoTorneoRegistrarComponent } from './equipo-torneo-registrar.component';

describe('EquipoTorneoRegistrarComponent', () => {
  let component: EquipoTorneoRegistrarComponent;
  let fixture: ComponentFixture<EquipoTorneoRegistrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquipoTorneoRegistrarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EquipoTorneoRegistrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
