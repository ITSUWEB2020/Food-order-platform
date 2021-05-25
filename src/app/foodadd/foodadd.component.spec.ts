import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodaddComponent } from './foodadd.component';

describe('FoodaddComponent', () => {
  let component: FoodaddComponent;
  let fixture: ComponentFixture<FoodaddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodaddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
