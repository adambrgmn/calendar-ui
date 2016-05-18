import { configure } from '@kadira/storybook';

function loadStories() {
  require('../src/components/Calendar/calendar.stories');
}

configure(loadStories, module);
