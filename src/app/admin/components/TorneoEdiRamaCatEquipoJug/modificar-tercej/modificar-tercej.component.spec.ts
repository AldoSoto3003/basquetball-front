import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarTercejComponent } from './modificar-tercej.component';

describe('ModificarTercejComponent', () => {
  let component: ModificarTercejComponent;
  let fixture: ComponentFixture<ModificarTercejComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarTercejComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModificarTercejComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
