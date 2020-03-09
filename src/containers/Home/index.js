import React from 'react'
import Head from 'next/head'
import { Title, Container } from './style'
import Header from '~/components/blocks/Header'
import VideoSection from '~/components/blocks/VideoSection'
import whiteLogo from '~/assets/images/logo-white.png'

const Home = () => (
  <Container>
    <Head>
      <title>Hi, I&apos;m a developer</title>
      <link rel="icon" href="/favicon.ico" />
      <script src="https://www.youtube.com/player_api" />
    </Head>

    <Header />
    <VideoSection />
    <main>
      <img className="logo" alt="clive mogusu logo" src={whiteLogo} />
      <Title className="title">Hi, I&apos;m Clive.</Title>
      <h2>I&apos;m a developer and I love to code in Javascript.</h2>
      <img
        className="construction-img"
        alt="site under construction"
        src="/under-construction.jpg"
      />
      <p>
        I&apos;m building this site so hold on to your pants! Great things
        coming up.
      </p>
    </main>
  </Container>
)

export default Home
