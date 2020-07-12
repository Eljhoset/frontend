module.exports = (api) => {
  const isTest = api.env('test')

  const targets = {
    browsers: '> 0.25%, not dead',
  }

  if (isTest) {
    delete targets.browsers
    targets.node = 'current'
  }

  return {
    presets: [
      [
        '@babel/env',
        {
          useBuiltIns: 'entry',
          corejs: { version: 3, proposals: true },
          targets,
        },
      ],
      '@babel/typescript',
    ],
    plugins: [
      '@babel/proposal-class-properties',
      '@babel/proposal-object-rest-spread',
    ],
  }
}
