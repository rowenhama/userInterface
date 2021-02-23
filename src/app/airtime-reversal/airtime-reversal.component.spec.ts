import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirtimeReversalComponent } from './airtime-reversal.component';

describe('AirtimeReversalComponent', () => {
  let component: AirtimeReversalComponent;
  let fixture: ComponentFixture<AirtimeReversalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AirtimeReversalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AirtimeReversalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
