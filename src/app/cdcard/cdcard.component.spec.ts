import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CDCardComponent } from './cdcard.component';

describe('CDCardComponent', () => {
  let component: CDCardComponent;
  let fixture: ComponentFixture<CDCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CDCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CDCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
