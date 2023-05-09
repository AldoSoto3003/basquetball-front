import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarTercejComponent } from './registrar-tercej.component';

describe('RegistrarTercejComponent', () => {
  let component: RegistrarTercejComponent;
  let fixture: ComponentFixture<RegistrarTercejComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarTercejComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarTercejComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
