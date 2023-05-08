import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptenerTercComponent } from './optener-terc.component';

describe('OptenerTercComponent', () => {
  let component: OptenerTercComponent;
  let fixture: ComponentFixture<OptenerTercComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptenerTercComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OptenerTercComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
