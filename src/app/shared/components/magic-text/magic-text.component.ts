import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-magic-text',
  templateUrl: './magic-text.component.html',
  styleUrls: ['./magic-text.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MagicTextComponent implements OnInit {
  index = 0;
  interval = 1;

  constructor(private elem: ElementRef) {}

  ngOnInit() {
    this.magic();
  }

  @HostListener('click')
  magic() {
    for (const star of this.elem.nativeElement.querySelectorAll(
      '.magic-star'
    )) {
      this.animate(star);
    }
  }

  rand(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  animate(star: HTMLElement) {
    star.style.setProperty('--star-left', `${this.rand(-10, 100)}%`);
    star.style.setProperty('--star-top', `${this.rand(-40, 80)}%`);
    star.style.animation = 'none';
    star.offsetHeight;
    star.style.animation = '';
  }
}
