import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  // your custom flat configs go here, for example:
  {
    // files: ['**/*.ts', '**/*.tsx'],
    rules: {
      'no-console': 'warn',
      indent: 'off',
      'vue/html-indent': 'off',
      'vue/html-self-closing': 'off',
      'space-before-function-paren': 'off',
      'space-in-parens': 'off',
      'no-lonely-if': 'off',
      'import/no-unresolved': 'off',
      'import/no-default-export': 'off',
      'import/default': 'off',
      'import/no-named-as-default-member': 'off',
      'func-call-spacing': 'off',
      'vue/first-attribute-linebreak ': 'off',
      'vue/html-closing-bracket-newline': 'off',
      'vue/multi-word-component-names': 'off',
      'vue/no-v-html': 'off',
      'vue/first-attribute-linebreak': 'off',
    },
  },
  // {
  //   ...
  // }
)
