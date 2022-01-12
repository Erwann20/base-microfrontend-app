import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AComComponent } from './a-com.component';

describe('AComComponent', () => {
  let component: AComComponent;
  let fixture: ComponentFixture<AComComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AComComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
