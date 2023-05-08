import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarTercComponent } from './registrar-terc.component';

describe('RegistrarTercComponent', () => {
  let component: RegistrarTercComponent;
  let fixture: ComponentFixture<RegistrarTercComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarTercComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarTercComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
