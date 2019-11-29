module.exports = {
  'outputDir': 'D:\\Learn Programming\\WebstormProjects\\MEVN_Dashboard_test\\server\\public',
  'devServer': {
    'proxy': {
      '/api': {
        'target': 'http://localhost:5000'
      }
    }
  },
  'transpileDependencies': [
    'vuetify'
  ]
};
