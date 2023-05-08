import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarjugadoresComponent } from './registrarjugadores.component';

describe('RegistrarjugadoresComponent', () => {
  let component: RegistrarjugadoresComponent;
  let fixture: ComponentFixture<RegistrarjugadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarjugadoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarjugadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
