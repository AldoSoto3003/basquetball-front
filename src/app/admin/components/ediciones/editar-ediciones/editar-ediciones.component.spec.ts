import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarEdicionesComponent } from './editar-ediciones.component';

describe('EditarEdicionesComponent', () => {
  let component: EditarEdicionesComponent;
  let fixture: ComponentFixture<EditarEdicionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarEdicionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarEdicionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
