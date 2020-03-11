import React, { Component } from 'react'
import PropTypes from 'prop-types'
import debounce from 'lodash/debounce'
import defaultCoverImg from '~/assets/images/default-cover-image.jpg'
import { getObserver } from '~/utils/common'
import { Container } from './style'

const intersectionOptions = {
  root: null,
  rootMargin: '500px',
  threshold: 1,
}

class Img extends Component {
  hasUnmounted = false

  containerWidth = 0

  observer = null

  state = {
    height: 0,
    showImage: false,
    hasError: false,
  }

  constructor(props) {
    super(props)
    this.imgContainerRef = React.createRef()
    this.showImage = this.showImage.bind(this)
    this.handleImageError = this.handleImageError.bind(this)
    this.handleImgVisibility = this.handleImgVisibility.bind(this)
    this.handleContainerResize = this.handleContainerResize.bind(this)

    this.setCoverImageHeight = debounce(this.setCoverImageHeight, 250)
  }

  componentDidMount() {
    this.setCoverImageHeight()
    this.addEventListeners()
    this.observeImgVisibility()
  }

  componentWillUnmount() {
    this.hasUnmounted = true
    this.removeEventListeners()
  }

  addEventListeners() {
    const { current: coverImgElement } = this.imgContainerRef
    coverImgElement.addEventListener('resize', this.handleContainerResize)
  }

  removeEventListeners() {
    const { current: coverImgElement } = this.imgContainerRef
    coverImgElement.removeEventListener('resize', this.handleContainerResize)
  }

  observeImgVisibility() {
    const { current: coverImgElement } = this.imgContainerRef
    this.observer = getObserver(this.handleImgVisibility, intersectionOptions)
    if (this.observer) this.observer.observe(coverImgElement)
  }

  stopObservingImgVisibility() {
    const { current: coverImgElement } = this.imgContainerRef
    if (this.observer) {
      this.observer.unobserve(coverImgElement)
      delete this.observer
    }
  }

  handleImgVisibility(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        this.loadCoverImg()
        this.stopObservingImgVisibility()
      }
    })
  }

  handleContainerResize() {
    const { current: coverImgElement } = this.imgContainerRef
    const { offsetWidth = 1 } = coverImgElement || {}
    if (offsetWidth !== this.containerWidth) {
      this.setCoverImageHeight()
    }
  }

  setCoverImageHeight() {
    const { current: coverImgElement } = this.imgContainerRef
    const { offsetWidth = 1 } = coverImgElement || {}
    const { widthToHeightRatio } = this.props
    const height = Math.floor(offsetWidth / widthToHeightRatio)
    this.containerWidth = offsetWidth
    this.setHeight(height)
  }

  setHeight(height) {
    if (!this.hasUnmounted) this.setState({ height })
  }

  loadCoverImg() {
    const img = document.createElement('img')
    img.onload = this.showImage
    img.src = this.props.src
  }

  showImage() {
    if (!this.hasUnmounted) this.setState({ showImage: true })
  }

  handleImageError() {
    this.setState({ hasError: true })
  }

  render() {
    const { alt, src, className } = this.props
    const { height, showImage, hasError } = this.state
    const style = {
      height: height > 0 ? `${height}px` : 'auto',
    }
    const imgSrc = showImage && !hasError ? src : defaultCoverImg

    return (
      <Container
        bgImgSrc={imgSrc}
        className={`${className} cover-img`}
        ref={this.imgContainerRef}
        showBgImage={showImage}
        style={style}
      >
        <img onError={this.handleImageError} alt={alt} src={imgSrc} />
      </Container>
    )
  }
}

Img.defaultProps = {
  className: '',
  widthToHeightRatio: 0.9,
}

Img.propTypes = {
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  src: PropTypes.string.isRequired,
  widthToHeightRatio: PropTypes.number,
}

export default Img
