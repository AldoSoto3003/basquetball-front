import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarLocalidadesComponent } from './editar-localidades.component';

describe('EditarLocalidadesComponent', () => {
  let component: EditarLocalidadesComponent;
  let fixture: ComponentFixture<EditarLocalidadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarLocalidadesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarLocalidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
