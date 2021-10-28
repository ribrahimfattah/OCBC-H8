import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskReactiveFormComponent } from './task-reactive-form.component';

describe('TaskReactiveFormComponent', () => {
  let component: TaskReactiveFormComponent;
  let fixture: ComponentFixture<TaskReactiveFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskReactiveFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
