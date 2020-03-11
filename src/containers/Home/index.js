import React from 'react'
import Head from 'next/head'
import Header from '~/components/blocks/Header'
import Footer from '~/components/blocks/Footer'
import VideoSection from './VideoSection'
import IntroSection from './IntroSection'
import WorkSection from './WorkSection'
import WhatWeDo from './WhatWeDo'
import CallToAction from './CallToAction'
import { Container } from './style'

const Home = () => (
  <Container>
    <Head>
      <title>Hi, I&apos;m a developer</title>
      <link rel="icon" href="/favicon.ico" />
      <script src="https://www.youtube.com/player_api" />
    </Head>

    <Header />
    <VideoSection />
    <IntroSection />
    <WorkSection />
    <WhatWeDo />
    <CallToAction />
    <Footer />
  </Container>
)

export default Home
