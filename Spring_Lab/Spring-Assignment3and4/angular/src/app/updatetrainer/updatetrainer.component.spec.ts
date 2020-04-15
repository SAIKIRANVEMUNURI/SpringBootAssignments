import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatetrainerComponent } from './updatetrainer.component';

describe('UpdatetrainerComponent', () => {
  let component: UpdatetrainerComponent;
  let fixture: ComponentFixture<UpdatetrainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatetrainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatetrainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
