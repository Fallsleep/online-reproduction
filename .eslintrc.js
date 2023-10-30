/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  env: {
    // 你的环境变量（包含多个预定义的全局变量）
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    '@vue/eslint-config-typescript',
    './.eslintrc-auto-import.json',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [['@', './src']],
        extensions: ['.ts', '.js', '.jsx', '.json', '.vue', 'tsx']
      }
    }
  },
  overrides: [
    {
      files: [
        '**/*.html'
      ]
    }
  ],
  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'generator-star-spacing': 'off',
    'vue/max-attributes-per-line': [
      2,
      {
        'singleline': 5,
        'multiline': {
          'max': 1
        }
      }
    ],
    'vue/attribute-hyphenation': 0,
    'vue/html-self-closing': 0,
    'vue/component-name-in-template-casing': 0,
    'vue/html-closing-bracket-spacing': 0,
    'vue/singleline-html-element-content-newline': 0,
    'vue/no-unused-components': 0,
    'vue/multiline-html-element-content-newline': 0,
    'vue/html-closing-bracket-newline': 0,
    'quotes': [
      'error',
      'single',
      {
        'avoidEscape': true,
        'allowTemplateLiterals': true
      }
    ],
    'semi': [
      'error',
      'never',
      {
        'beforeStatementContinuationChars': 'never'
      }
    ],
    'no-delete-var': 'error',
    'template-curly-spacing': 'off',
    'indent': 0,
    '@typescript-eslint/indent': ['error', 2],
    'comma-spacing': ['error', {
      'before': false,
      'after': true
    }],
    // 禁用尾随逗号
    'comma-dangle': 'off',
    'no-multi-spaces': ['error', {
      'ignoreEOLComments': true
    }],
    'space-before-blocks': 'error',
    'array-bracket-spacing': ['error', 'never'],
    'object-curly-spacing': ['error', 'always'],
    '@typescript-eslint/type-annotation-spacing': ['error', {
      'before': false,
      'after': true
    }],
    'space-infix-ops': 'error',
    'no-trailing-spaces': 'error',
    'arrow-spacing': 'error'
  }
}
