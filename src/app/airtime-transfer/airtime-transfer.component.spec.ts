import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirtimeTransferComponent } from './airtime-transfer.component';

describe('AirtimeTransferComponent', () => {
  let component: AirtimeTransferComponent;
  let fixture: ComponentFixture<AirtimeTransferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AirtimeTransferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AirtimeTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
