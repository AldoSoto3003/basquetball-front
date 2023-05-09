import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrartorneoalbitroComponent } from './registrartorneoalbitro.component';

describe('RegistrartorneoalbitroComponent', () => {
  let component: RegistrartorneoalbitroComponent;
  let fixture: ComponentFixture<RegistrartorneoalbitroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrartorneoalbitroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrartorneoalbitroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
