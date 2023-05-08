import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarTorneoCanchaComponent } from './editar-torneo-cancha.component';

describe('EditarTorneoCanchaComponent', () => {
  let component: EditarTorneoCanchaComponent;
  let fixture: ComponentFixture<EditarTorneoCanchaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarTorneoCanchaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarTorneoCanchaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
