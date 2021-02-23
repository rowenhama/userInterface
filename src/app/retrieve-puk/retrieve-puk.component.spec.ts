import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetrievePukComponent } from './retrieve-puk.component';

describe('RetrievePukComponent', () => {
  let component: RetrievePukComponent;
  let fixture: ComponentFixture<RetrievePukComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetrievePukComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RetrievePukComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
