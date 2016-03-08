module.exports = {
  options: {
    shorthandCompacting: false,
    roundingPrecision: -1,
    sourceMap: true
  },
  target: {
    files: [{
      'build/stylesheets/main.min.css': ['build/stylesheets/main.css']
    }]
  }
};