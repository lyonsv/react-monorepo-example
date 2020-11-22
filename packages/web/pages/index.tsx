import React from 'react'
import Layout from 'layouts/Base'
import { H1 } from '@react-example/ui/styles/typography'

const Home: React.FC = () => {
  return (
    <Layout>
      <H1 light data-testid='homepage-title'>
        Hello
      </H1>
    </Layout>
  )
}

export default Home
