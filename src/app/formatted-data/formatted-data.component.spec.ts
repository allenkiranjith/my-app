import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormattedDataComponent } from './formatted-data.component';

describe('FormattedDataComponent', () => {
  let component: FormattedDataComponent;
  let fixture: ComponentFixture<FormattedDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormattedDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormattedDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
