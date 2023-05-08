import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarTercComponent } from './modificar-terc.component';

describe('ModificarTercComponent', () => {
  let component: ModificarTercComponent;
  let fixture: ComponentFixture<ModificarTercComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarTercComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModificarTercComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
