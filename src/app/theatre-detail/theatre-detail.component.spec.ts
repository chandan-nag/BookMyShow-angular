import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheatreDetailComponent } from './theatre-detail.component';

describe('TheatreDetailComponent', () => {
  let component: TheatreDetailComponent;
  let fixture: ComponentFixture<TheatreDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheatreDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TheatreDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
