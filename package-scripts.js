module.exports = {
  scripts: {
    contributors: {
      default: {
        script: 'all-contributors add',
        description: 'Add a contribution'
      },
      generate: {
        script: 'all-contributors generate',
        description: 'Generate all contributors list'
      }
    }
  }
};
