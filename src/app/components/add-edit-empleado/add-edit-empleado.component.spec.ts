import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditEmpleadoComponent } from './add-edit-empleado.component';

describe('AddEditEmpleadoComponent', () => {
  let component: AddEditEmpleadoComponent;
  let fixture: ComponentFixture<AddEditEmpleadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditEmpleadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditEmpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
