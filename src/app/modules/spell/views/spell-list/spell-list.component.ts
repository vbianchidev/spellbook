import { Component, OnInit } from '@angular/core';
import { SpellEntity } from '../../store/spell.entity';

@Component({
  selector: 'app-spell-list',
  templateUrl: './spell-list.component.html',
  styleUrls: ['./spell-list.component.scss']
})
export class SpellListComponent {
  spellMock: SpellEntity = {
    id: 0,
    name: 'Mock Spell',
    description: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Nullam consequat, tortor vel eleifend volutpat, felis leo rhoncus nunc, a eleifend justo justo ac mauris. 
      Pellentesque commodo purus sed consectetur lacinia. 
      Aenean ornare quam quis imperdiet accumsan. 
      Sed rutrum, arcu quis scelerisque pellentesque, elit enim ultrices quam, sit amet tincidunt risus urna ut neque. 
      Mauris a ultrices justo. Aenean sit amet volutpat felis. 
      Sed pellentesque, augue eu euismod bibendum, nunc orci lobortis enim, vitae molestie magna nisi nec lacus. 
      Quisque iaculis posuere orci, sed fermentum arcu sollicitudin ut. 
      Suspendisse nulla mauris, euismod nec eros et, malesuada porta sem. 
      Vestibulum egestas at purus posuere scelerisque.`,
    type: 'fire',
    level: 0,
    school: 'evocation',
    castingTime: '1 Action',
    range: '60 Feet',
    duration: 'Instantaneous',
    components: ['V', 'S']
  }
}
