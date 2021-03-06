import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CouponFormComponent } from './coupon-form.component';

describe('CouponFormComponent', () => {
  let component: CouponFormComponent;
  let fixture: ComponentFixture<CouponFormComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CouponFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CouponFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
