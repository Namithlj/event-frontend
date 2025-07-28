import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkerRegistrationComponent } from './worker-registration';

describe('WorkerRegistration', () => {
  let component: WorkerRegistrationComponent;
  let fixture: ComponentFixture<WorkerRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkerRegistrationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkerRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
