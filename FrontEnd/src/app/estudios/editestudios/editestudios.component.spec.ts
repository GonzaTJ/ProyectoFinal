import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditestudiosComponent } from './editestudios.component';

describe('EditestudiosComponent', () => {
  let component: EditestudiosComponent;
  let fixture: ComponentFixture<EditestudiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditestudiosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditestudiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
