import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpellDeckComponent } from './spell-deck.component';

describe('SpellDeckComponent', () => {
  let component: SpellDeckComponent;
  let fixture: ComponentFixture<SpellDeckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SpellDeckComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SpellDeckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
