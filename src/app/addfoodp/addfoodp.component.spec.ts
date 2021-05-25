import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddfoodpComponent } from './addfoodp.component';

describe('AddfoodpComponent', () => {
  let component: AddfoodpComponent;
  let fixture: ComponentFixture<AddfoodpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddfoodpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddfoodpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
