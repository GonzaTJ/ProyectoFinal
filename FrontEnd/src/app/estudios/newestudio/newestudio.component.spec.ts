import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewestudioComponent } from './newestudio.component';

describe('NewestudioComponent', () => {
  let component: NewestudioComponent;
  let fixture: ComponentFixture<NewestudioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewestudioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewestudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
