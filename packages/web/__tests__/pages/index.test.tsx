import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { screen, render } from '@testing-library/react'
import HomePage from '../../pages/index'

describe('The homepage', () => {
  test('should render', () => {
    render(<HomePage />)
    const title = screen.getByTestId('homepage-title')

    expect(title).toBeDefined()
  })
})
