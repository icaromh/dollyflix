import React from 'react'
import { mount } from 'enzyme'
import sinon from 'sinon'

import ShowHeader from '.'

describe('ShowHeader', () => {
  const show = {
    _id: { $oid: '5a4e739cb1482366e86cd6a9' },
    slug: 'alphas',
    title: 'Alphas',
    year: 2011,
    imdb_id: 'tt1183865',
    tvdb_id: 210841,
    tmdb_id: 39362,
    synopsis: 'Alphas is an action-packed thriller about five ordinary people who are brought together to form one extraordinary team of Alphas -- people with the unique power to stretch the capabilities of the human mind giving them superhuman physical and mental abilities.',
    runtime: 45,
    country: 'us',
    network: 'Syfy',
    status: 'ended',
    num_seasons: 2,
    last_updated: { $date: 1515090826285 },
    latest_episode: 0,
    images: { banner: 'https://image.tmdb.org/t/p/w500/gmDmHFMrLUZYK5xMZ6DmuHDnpVN.jpg', fanart: 'https://image.tmdb.org/t/p/w500/5NObcrwbAb1VdRXntEacneU26tK.jpg', poster: 'https://image.tmdb.org/t/p/w500/gmDmHFMrLUZYK5xMZ6DmuHDnpVN.jpg' },
    genres: ['drama', 'action', 'adventure', 'fantasy', 'science-fiction'],
    episodes: [{
      number: '13', id: 'bf252112d125cd48', season: '2', image: 'https://image.tmdb.org/t/p/w500/6nGGShfu3reNeRE6tI3SpzzrQHn.jpg', description: 'Rosen starts having hallucinations about his daughter; Rosen seeks a final confrontation with Alpha leader Stanton Parish.', title: "God's Eye",
    }, {
      number: '12', id: 'c4a5dd857b4d555a', season: '2', image: 'https://image.tmdb.org/t/p/w500/wRwhTs9lmVQCixClDvloI8QVVIQ.jpg', description: 'Rosen kidnaps and interrogates an Alpha prisoner; Harken and Gary search for Skylar.', title: 'Need to Know',
    }],
  }

  it('should not render when prop.show is empty', () => {
    const wrapper = mount(<ShowHeader
      show={{}}
      isFavoritedShow={false}
      onFavoriteClick={jest.fn()}
      onUnfavoriteClick={jest.fn()}
    />)

    expect(wrapper.html()).toEqual(null)
  })

  it('should render when passing items in props', () => {
    // Act
    const wrapper = mount(<ShowHeader
      show={show}
      isFavoritedShow={false}
      onFavoriteClick={jest.fn()}
      onUnfavoriteClick={jest.fn()}
    />)

    // Expect
    expect(wrapper.find('.show-featured').length).toEqual(1)
  })

  it('should show favorite button when show is favorited', () => {
    // Prepare
    const onButtonClick = sinon.spy()
    const wrapper = mount(<ShowHeader
      show={show}
      isFavoritedShow={false}
      onFavoriteClick={onButtonClick}
      onUnfavoriteClick={jest.fn()}
    />)

    // Act
    const btn = wrapper.find('.show-featured__actions__button')
    btn.simulate('click')

    // Expect
    expect(onButtonClick.called).toEqual(true)
    expect(btn.find('.show-featured__actions__button__icon').text()).toEqual('+')
  })

  it('should show unfavorite button when show is favorited', () => {
    // Prepare
    const onButtonClick = sinon.spy()

    const wrapper = mount(<ShowHeader
      show={show}
      onFavoriteClick={jest.fn()}
      onUnfavoriteClick={onButtonClick}
      isFavoritedShow
    />)

    // Act
    const btn = wrapper.find('.show-featured__actions__button')
    btn.simulate('click')

    // Expect
    expect(onButtonClick.called).toEqual(true)
    expect(btn.find('.show-featured__actions__button__icon').text()).toEqual('✓')
  })
})
