import React from 'react';
import { storiesOf } from '@kadira/storybook';

import SvgIcon from './index.js';

storiesOf('SvgIcon', module)
  .add('Arrow right', () => <SvgIcon icon="arrowRight" />)
  .add('Arrow left', () => <SvgIcon icon="arrowLeft" />)
  .add('Icon undefined', () => <SvgIcon />);
