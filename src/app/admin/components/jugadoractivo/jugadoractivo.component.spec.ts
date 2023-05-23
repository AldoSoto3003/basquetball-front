import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JugadoractivoComponent } from './jugadoractivo.component';

describe('JugadoractivoComponent', () => {
  let component: JugadoractivoComponent;
  let fixture: ComponentFixture<JugadoractivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JugadoractivoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JugadoractivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
