import { configure } from '@kadira/storybook';

function loadStories() {
  require('../src/components/Calendar/calendar.stories');
  require('../src/components/SvgIcon/svgIcon.stories');
}

configure(loadStories, module);
