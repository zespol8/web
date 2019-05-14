import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetPasswordStartComponent } from './reset-password-start.component';

describe('ResetPasswordStartComponent', () => {
  let component: ResetPasswordStartComponent;
  let fixture: ComponentFixture<ResetPasswordStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResetPasswordStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetPasswordStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
