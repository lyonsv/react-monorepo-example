import React from 'react'
import { render } from '@testing-library/react-native'
import App from './App'

test('visiting the home screen', async () => {
  console.disableYellowBox = true
  const { findByTestId } = render(<App />)

  const welcomeTitle = await findByTestId('homepage-title')
  expect(welcomeTitle).toBeDefined()
})
