import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import MediaItem from '../src/components/mediaItem';

storiesOf('MediaItem', module)
  .add('without trailer', () => (
    <MediaItem />
  ))
  .add('with trailer', () => (
    <MediaItem width="560px" height="315px" trailer="ONHBaC-pfsk" />
  ));
