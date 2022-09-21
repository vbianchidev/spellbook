import { ChangeDetectionStrategy, Component } from '@angular/core';
import { faBook, faBookAtlas, faBookSkull } from '@fortawesome/free-solid-svg-icons';
import { SpellElementsIcons } from 'src/app/core/constants/spell-elements-icons.const';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuComponent {

  logo = faBook
}
