import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilyPicsComponent } from './family-pics.component';

describe('FamilyPicsComponent', () => {
  let component: FamilyPicsComponent;
  let fixture: ComponentFixture<FamilyPicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FamilyPicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FamilyPicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
