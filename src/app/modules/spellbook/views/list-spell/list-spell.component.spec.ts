import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSpellComponent } from './list-spell.component';

describe('ListSpellComponent', () => {
  let component: ListSpellComponent;
  let fixture: ComponentFixture<ListSpellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListSpellComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListSpellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
