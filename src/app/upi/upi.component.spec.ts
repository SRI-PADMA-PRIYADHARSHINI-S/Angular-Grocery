import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UPIComponent } from './upi.component';

describe('UPIComponent', () => {
  let component: UPIComponent;
  let fixture: ComponentFixture<UPIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UPIComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UPIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
