import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupCreationComponent } from './popup-creation.component';

describe('PopupCreationComponent', () => {
  let component: PopupCreationComponent;
  let fixture: ComponentFixture<PopupCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupCreationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
