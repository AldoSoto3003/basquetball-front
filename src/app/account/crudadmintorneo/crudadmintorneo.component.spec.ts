import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudadmintorneoComponent } from './crudadmintorneo.component';

describe('CrudadmintorneoComponent', () => {
  let component: CrudadmintorneoComponent;
  let fixture: ComponentFixture<CrudadmintorneoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudadmintorneoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudadmintorneoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
