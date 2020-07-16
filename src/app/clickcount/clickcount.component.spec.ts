import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickcountComponent } from './clickcount.component';

describe('ClickcountComponent', () => {
  let component: ClickcountComponent;
  let fixture: ComponentFixture<ClickcountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClickcountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClickcountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
