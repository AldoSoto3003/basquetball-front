import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptenerTercejComponent } from './optener-tercej.component';

describe('OptenerTercejComponent', () => {
  let component: OptenerTercejComponent;
  let fixture: ComponentFixture<OptenerTercejComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptenerTercejComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OptenerTercejComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
