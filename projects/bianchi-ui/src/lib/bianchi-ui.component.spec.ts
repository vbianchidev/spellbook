import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BianchiUiComponent } from './bianchi-ui.component';

describe('BianchiUiComponent', () => {
  let component: BianchiUiComponent;
  let fixture: ComponentFixture<BianchiUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BianchiUiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BianchiUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
