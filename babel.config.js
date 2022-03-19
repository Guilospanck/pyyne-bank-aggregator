module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          esmodules: true
        }
      }
    ],
    '@babel/preset-typescript'
  ],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'), {
        alias: {
          '@app': './src/applications',
          '@business': './src/business',
          '@infra': './src/infrastructure',
          '@interfaces': './src/interfaces',          
          '@shared': './src/shared',
          '@shared_business': './src/shared/business',
          '@shared_interfaces': './src/shared/interfaces',
          '@shared_utils': './src/shared/utils'
        }
      }
    ],
    // '@babel/proposal-class-properties', // error class properties undefined sequelize
    '@babel/proposal-object-rest-spread'
  ],
  ignore: [
    'node_modules',
    '**/*.spec.ts',
    '**/dtos/',
    '**/entities/',
    '**/business/usecases/',
    '**/applications/interfaces/',
    '**/mocks/'
  ]
}