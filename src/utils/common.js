export const loadScript = function(src) {
  var tag = document.createElement('script');
  tag.async = false;
  tag.src = src;
  document.getElementsByTagName('body').appendChild(tag);
}

export default {}
