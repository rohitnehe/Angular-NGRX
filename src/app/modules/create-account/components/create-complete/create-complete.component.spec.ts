import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCompleteComponent } from './create-complete.component';

describe('CreateCompleteComponent', () => {
  let component: CreateCompleteComponent;
  let fixture: ComponentFixture<CreateCompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
