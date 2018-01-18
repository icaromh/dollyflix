import React from 'react'
import { mount } from 'enzyme'

import SeasonSelector from '.'

describe('SeasonSelector', () => {
  it('should render an empty select', () => {
    const wrapper = mount(<SeasonSelector
      onChange={jest.fn()}
      onClick={jest.fn()}
      seasons={[]}
      value={0}
    />)

    expect(wrapper.html()).toEqual('<select class="select"></select>')
  })

  it('should perform onClick on click of option', () => {
    // Arrange
    const handleOnClick = jest.fn()
    const wrapper = mount(<SeasonSelector
      onChange={jest.fn()}
      onClick={handleOnClick}
      seasons={[1, 2, 3]}
      value={1}
    />)

    // Act
    wrapper.find('option').at(0).simulate('click')

    // Assert
    expect(handleOnClick.mock.calls.length).toEqual(1)
  })

  it('should perform onChange when user change the value of', () => {
    // Arrange
    const handleOnChange = jest.fn()
    const wrapper = mount(<SeasonSelector
      onChange={handleOnChange}
      onClick={jest.fn()}
      seasons={[1, 2, 3]}
      value={1}
    />)

    // Act
    wrapper.find('select').find('option').at(1).simulate('click')
    wrapper.find('select').simulate('change', {
      target: {
        value: '2',
      },
    })

    // Assert
    expect(handleOnChange.mock.calls.length).toEqual(1)
  })
})
