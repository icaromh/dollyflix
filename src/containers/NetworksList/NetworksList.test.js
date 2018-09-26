import React from 'react'
import { mount } from 'enzyme'

import NetworksList from './NetworksList'
import ShowItem from '../../components/ShowItem'

describe('NetworksList', () => {
  const items = [{
    _id: { $oid: '5a1f7a6c33fea2478dfbaa93' },
    slug: 'vikings',
    title: 'Vikings',
    year: 2013,
    imdb_id: 'tt2306299',
    tvdb_id: 260449,
    tmdb_id: 44217,
    synopsis: "Vikings follows the adventures of Ragnar Lothbrok the greatest hero of his age. The series tells the sagas of Ragnar's band of Viking brothers and his family, as he rises to become King of the Viking tribes. As well as being a fearless warrior, Ragnar embodies the Norse traditions of devotion to the gods, legend has it that he was a direct descendant of Odin, the god of war and warriors.",
    runtime: 44,
    country: 'ca',
    network: 'History',
    status: 'returning series',
    num_seasons: 5,
    last_updated: { $date: 1515095078613 },
    latest_episode: 0,
    images: { banner: 'https://image.tmdb.org/t/p/w500/mBDlsOhNOV1MkNii81aT14EYQ4S.jpg', fanart: 'https://image.tmdb.org/t/p/w500/A30ZqEoDbchvE7mCZcSp6TEwB1Q.jpg', poster: 'https://image.tmdb.org/t/p/w500/mBDlsOhNOV1MkNii81aT14EYQ4S.jpg' },
    genres: ['drama', 'action', 'adventure'],
    episodes: [{
      number: '07', id: 'a452b43ba0fb4381', season: '5', image: 'https://image.tmdb.org/t/p/w500/51vXi4dEwHZBGvSkBUcDa8gZoYZ.jpg', description: 'Bjorn returns to Kattegat to learn that an attack will take place during the next full moon; Ivar must decide if he can place his trust in a former enemy on the battlefield.', title: 'Full Moon',
    }],
  }, {
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
  }]

  it('should not render when prop.items is empty', () => {
    const wrapper = mount(<NetworksList selectShow={() => {}} />)

    expect(wrapper.html()).toEqual(null)
  })

  it('should render when passing items in props', () => {
    // Act
    const wrapper = mount(<NetworksList selectShow={() => {}} items={items} />)

    // Expect
    expect(wrapper.find('.title').text()).toEqual('Séries Favoritas')
    expect(wrapper.find(ShowItem).length).toEqual(2)
  })
})
