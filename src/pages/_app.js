import App from 'next/app'
import React from 'react'
import { ThemeProvider } from 'styled-components'

const theme = {
  colors: {
    primary: '#5fff00',
    yellow: 'yellow',
    link: '#333',
    linkHover: '#1890ff',
  },
  text: {
    primary: '#222',
  },
  borderRadius: '5px',
}

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}
