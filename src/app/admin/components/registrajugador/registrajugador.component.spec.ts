import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrajugadorComponent } from './registrajugador.component';

describe('RegistrajugadorComponent', () => {
  let component: RegistrajugadorComponent;
  let fixture: ComponentFixture<RegistrajugadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrajugadorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrajugadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
