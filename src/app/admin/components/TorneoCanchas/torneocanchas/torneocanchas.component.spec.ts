import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TorneocanchasComponent } from './torneocanchas.component';

describe('TorneocanchasComponent', () => {
  let component: TorneocanchasComponent;
  let fixture: ComponentFixture<TorneocanchasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TorneocanchasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TorneocanchasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
