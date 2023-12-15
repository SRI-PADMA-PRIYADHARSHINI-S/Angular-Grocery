import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResOffersComponent } from './res-offers.component';

describe('ResOffersComponent', () => {
  let component: ResOffersComponent;
  let fixture: ComponentFixture<ResOffersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResOffersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
