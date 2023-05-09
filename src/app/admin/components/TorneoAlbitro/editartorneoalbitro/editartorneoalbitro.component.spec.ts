import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditartorneoalbitroComponent } from './editartorneoalbitro.component';

describe('EditartorneoalbitroComponent', () => {
  let component: EditartorneoalbitroComponent;
  let fixture: ComponentFixture<EditartorneoalbitroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditartorneoalbitroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditartorneoalbitroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
