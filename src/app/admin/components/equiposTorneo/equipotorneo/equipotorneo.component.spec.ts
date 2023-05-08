import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipotorneoComponent } from './equipotorneo.component';

describe('EquipotorneoComponent', () => {
  let component: EquipotorneoComponent;
  let fixture: ComponentFixture<EquipotorneoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquipotorneoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EquipotorneoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
