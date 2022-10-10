import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpellBookListComponent } from './spellbook-list.component';

describe('ListSpellComponent', () => {
  let component: SpellBookListComponent;
  let fixture: ComponentFixture<SpellBookListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SpellBookListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SpellBookListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
