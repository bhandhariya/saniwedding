import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadhaPeopleComponent } from './radha-people.component';

describe('RadhaPeopleComponent', () => {
  let component: RadhaPeopleComponent;
  let fixture: ComponentFixture<RadhaPeopleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadhaPeopleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadhaPeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
