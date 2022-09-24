import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MattewComponent } from './mattew.component';

describe('MattewComponent', () => {
  let component: MattewComponent;
  let fixture: ComponentFixture<MattewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MattewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MattewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
