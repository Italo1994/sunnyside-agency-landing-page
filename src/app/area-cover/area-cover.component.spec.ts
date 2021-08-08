import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaCoverComponent } from './area-cover.component';

describe('AreaCoverComponent', () => {
  let component: AreaCoverComponent;
  let fixture: ComponentFixture<AreaCoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreaCoverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaCoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
