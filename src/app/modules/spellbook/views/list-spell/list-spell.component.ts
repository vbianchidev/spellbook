import { Component, OnInit } from '@angular/core';
import { Icons } from 'src/app/core/constants/icons.constant';
import { RPGDamageType } from 'src/app/core/rules/rpg.rule';

@Component({
  templateUrl: './list-spell.component.html',
  styleUrls: ['./list-spell.component.scss']
})
export class ListSpellComponent implements OnInit {
  elements: any[] = []
  iconElement = Icons.elements;

  ngOnInit(): void {
    this.mapElements();
  }

  mapElements(): void {
    for(let key in this.iconElement) {
      const value = this.iconElement[key as RPGDamageType];
      this.elements.push({ 
        element: key,
        ...value
      });
    }

    console.log(this.elements)
  }

}
