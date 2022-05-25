import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoPathComponentComponent } from './no-path-component.component';

describe('NoPathComponentComponent', () => {
  let component: NoPathComponentComponent;
  let fixture: ComponentFixture<NoPathComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoPathComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoPathComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
