import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleinsertComponent } from './sampleinsert.component';

describe('SampleinsertComponent', () => {
  let component: SampleinsertComponent;
  let fixture: ComponentFixture<SampleinsertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SampleinsertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleinsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
