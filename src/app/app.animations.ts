import {
  style,
  animate,
  animation,
} from '@angular/animations';
import { sanitizeUrl } from '@angular/platform-browser/src/security/url_sanitizer';

export const slideFadeIn = animation([
  style({
    opacity: 0,
    transform: 'translateX(2%)'
  }),
  animate('{{time}} {{easing}}', style({
    opacity: 1,
    transform: 'translateX(0)'
  }))
], {
  params: {
    time: '.5s',
    easing: 'ease-out'
  }
});

export const slideFadeOut = animation([
  style({
    opacity: 1,
    transform: 'translateX(0)'
  }),
  animate('{{time}} {{easing}}', style({
    opacity: 0,
    transform: 'translateX(-2%)'
  }))
], {
  params: {
    time: '.5s',
    easing: 'ease-out'
  }

});
