import type { NavOperations, ShortcutOptions } from '@slidev/types';
import { defineShortcutsSetup } from '@slidev/types';

export default defineShortcutsSetup(
  (nav: NavOperations, base: ShortcutOptions[]) => {
    return [
      ...base, // keep the existing shortcuts
      {
        // down arrow to go to the next step, rather than the next slide
        key: 'arrowDown',
        fn: nav.next,
        autoRepeat: true,
      },
      {
        // up arrow to go to the previous step, rather than the previous slide
        key: 'arrowUp',
        fn: nav.prev,
        autoRepeat: true,
      },
      {
        // page down to go to the next step, rather than the next slide
        key: 'pageDown',
        fn: nav.next,
        autoRepeat: true,
      },
      {
        // page up to go to the previous step, rather than the previous slide
        key: 'pageUp',
        fn: nav.prev,
        autoRepeat: true,
      },
      {
        // home to go to the first slide
        key: 'home',
        fn: nav.goFirst,
      },
      {
        // end to go to the last slide
        key: 'end',
        fn: nav.goLast,
      },
    ];
  },
);
