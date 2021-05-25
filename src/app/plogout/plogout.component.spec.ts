import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlogoutComponent } from './plogout.component';

describe('PlogoutComponent', () => {
  let component: PlogoutComponent;
  let fixture: ComponentFixture<PlogoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlogoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
