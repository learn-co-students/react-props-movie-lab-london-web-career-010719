import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow } from 'enzyme';
import { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import MovieShowcase from '../src/MovieShowcase';
import MovieCard from '../src/card-components/MovieCard'


describe('<MovieShowcase />', () => {
  let cards;

  beforeEach(() => {
    cards = shallow(<MovieShowcase />).find(MovieCard)
  })

  it('renders at least one <MovieCard /> component', () => {
    expect(cards.exists()).to.equal(true)
  })

  it('renders 9 <MovieCard /> components', () => {
    expect(cards).to.have.length(9)
  })

  it('passes all 4 props to every component', () => {
    expect(cards.exists()).to.equal(true)
    cards.forEach(card => {
      expect(card.props().title).to.exist
      expect(card.props().IMDBRating).to.exist
      expect(card.props().genres).to.exist
      expect(card.props().poster).to.exist
    })
  })




})
