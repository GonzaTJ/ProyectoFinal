import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogopComponent } from './logop.component';

describe('LogopComponent', () => {
  let component: LogopComponent;
  let fixture: ComponentFixture<LogopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
