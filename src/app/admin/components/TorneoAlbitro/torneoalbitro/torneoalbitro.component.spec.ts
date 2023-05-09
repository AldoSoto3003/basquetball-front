import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TorneoalbitroComponent } from './torneoalbitro.component';

describe('TorneoalbitroComponent', () => {
  let component: TorneoalbitroComponent;
  let fixture: ComponentFixture<TorneoalbitroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TorneoalbitroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TorneoalbitroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
