const defaultIntersectionOptions = {
  root: null,
  rootMargin: '1px',
  threshold: 1,
}

export const getObserver = (
  intersectionCallback,
  intersectionOptions = defaultIntersectionOptions,
) =>
  window.IntersectionObserver
    ? new window.IntersectionObserver(intersectionCallback, intersectionOptions)
    : false

export const loadScript = src => {
  const tag = document.createElement('script')
  tag.async = false
  tag.src = src
  document.getElementsByTagName('body').appendChild(tag)
}
