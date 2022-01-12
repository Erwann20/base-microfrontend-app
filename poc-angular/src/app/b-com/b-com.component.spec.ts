import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BComComponent } from './b-com.component';

describe('BComComponent', () => {
  let component: BComComponent;
  let fixture: ComponentFixture<BComComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BComComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
