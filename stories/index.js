import React from 'react';
import { storiesOf, action, linkTo } from '@storybook/react';

import MediaItem from '../src/components/mediaItem';
import Spinner from '../src/components/spinner';
import SearchIcon from '../src/components/SearchIcon';
import SerieItem from '../src/components/serieItem';

import SerieList from '../src/containers/serieList';

import series from './fixtures/series';

storiesOf('SerieItem', module)
  .add('all', () => (
    <SerieItem
      serie={series[1]}
      onClick={() => console.log('click')}
      />))

storiesOf('MediaItem', module)
  .add('without trailer', () => (
    <MediaItem />
  ))
  .add('with trailer', () => (
    <MediaItem width="560px" height="315px" trailer="ONHBaC-pfsk" />
  ));

storiesOf('Loader', module)
  .add('spinning', () => (
    <Spinner />
  ));

storiesOf('SVG Icons', module)
  .add('Search', () => (
    <div style={{position: "relative", padding: "20px"}}>
      <h1 className="page-title">Search Icon</h1>
      <SearchIcon />
    </div>
  ));
