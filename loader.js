module.exports = function loader(src) {
  return src.replace('MODE', this.mode)
}
