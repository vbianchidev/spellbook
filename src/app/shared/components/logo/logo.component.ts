import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-logo',
  template: `
    <svg 
      width="48" 
      height="48" 
      viewBox="0 0 314 360" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg">
      <path d="M306 95L154.5 9L8 95L8 263.5L154.5 351L306 263.5V95Z" stroke="black" stroke-width="10"/>
      <path 
        stroke-width="15"
        stroke="url(#paint0_linear_613_308)"
        d="M154.5 76.5L249.5 243M154.5 76.5L306 95M154.5 76.5V9M154.5 76.5L8 95M154.5 76.5L60.5 243M249.5 243L306 95M249.5 243H60.5M249.5 243L154.5 351M249.5 243L306 263.5M306 95L154.5 9M306 95V263.5M154.5 9L8 95M306 263.5L154.5 351M154.5 351L8 263.5M154.5 351L60.5 243M8 263.5L8 95M8 263.5L60.5 243M8 95L60.5 243"/>
      <defs>
        <linearGradient id="paint0_linear_613_308" x1="66.879" y1="33.8226" x2="297.371" y2="292.571" gradientUnits="userSpaceOnUse">
          <stop stop-color="#A73EE7"/>
          <stop offset="1" stop-color="#00EBFF"/>
        </linearGradient>
      </defs>
    </svg>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LogoComponent { }
