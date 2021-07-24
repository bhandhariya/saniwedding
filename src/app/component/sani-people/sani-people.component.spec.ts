import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaniPeopleComponent } from './sani-people.component';

describe('SaniPeopleComponent', () => {
  let component: SaniPeopleComponent;
  let fixture: ComponentFixture<SaniPeopleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaniPeopleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaniPeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
