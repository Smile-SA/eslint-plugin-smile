import jsRules from './js';

const uncategorizedRules = {
  // @see https://eslint.vuejs.org/rules/#uncategorized
  // 'vue/block-lang': 'error',
  'vue/block-tag-newline': [
    'error',
    { maxEmptyLines: 1, multiline: 'always', singleline: 'always' },
  ],
  'vue/component-api-style': ['error', ['script-setup']],
  'vue/component-name-in-template-casing': 'error',
  // 'vue/component-options-name-casing': 'error',
  'vue/custom-event-name-casing': 'error',
  'vue/define-emits-declaration': 'error',
  'vue/define-macros-order': 'error',
  'vue/define-props-declaration': 'error',
  'vue/html-button-has-type': 'error',
  'vue/html-comment-content-newline': 'error',
  'vue/html-comment-content-spacing': 'error',
  'vue/html-comment-indent': 'error',
  'vue/match-component-file-name': [
    'error',
    {
      extensions: ['js', 'jsx', 'ts', 'tsx', 'vue'],
    },
  ],
  'vue/match-component-import-name': 'error',
  // 'vue/new-line-between-multi-line-property': 'error',
  'vue/next-tick-style': 'error',
  // 'vue/no-bare-strings-in-template': 'error',
  'vue/no-boolean-default': 'error',
  'vue/no-duplicate-attr-inheritance': 'error',
  'vue/no-empty-component-block': 'error',
  'vue/no-multiple-objects-in-class': 'error',
  'vue/no-potential-component-option-typo': ['error', { presets: ['all'] }],
  'vue/no-ref-object-destructure': 'error',
  'vue/no-required-prop-with-default': 'error',
  // 'vue/no-restricted-block': 'error',
  // 'vue/no-restricted-call-after-await': 'error',
  // 'vue/no-restricted-class': 'error',
  // 'vue/no-restricted-component-options': 'error',
  // 'vue/no-restricted-custom-event': 'error',
  // 'vue/no-restricted-html-elements': 'error',
  // 'vue/no-restricted-props': 'error',
  // 'vue/no-restricted-static-attribute': 'error',
  // 'vue/no-restricted-v-bind': 'error',
  'vue/no-static-inline-styles': 'error',
  'vue/no-template-target-blank': 'error',
  'vue/no-this-in-before-route-enter': 'error',
  // 'vue/no-undef-components': 'error',
  'vue/no-undef-properties': 'error',
  // 'vue/no-unsupported-features': 'error',
  'vue/no-unused-properties': [
    'error',
    { groups: ['props', 'data', 'computed', 'methods', 'setup'] },
  ],
  'vue/no-unused-refs': 'error',
  'vue/no-useless-mustaches': 'error',
  'vue/no-useless-v-bind': 'error',
  'vue/no-v-text': 'error',
  'vue/padding-line-between-blocks': 'error',
  // 'vue/padding-line-between-tags': 'error',
  'vue/padding-lines-in-component-definition': 'error',
  // 'vue/prefer-prop-type-boolean-first': 'error',
  'vue/prefer-separate-static-class': 'error',
  'vue/prefer-true-attribute-shorthand': 'error',
  'vue/require-direct-export': 'error',
  // 'vue/require-emit-validator': 'error',
  'vue/require-expose': 'error',
  'vue/require-name-property': 'error',
  // 'vue/require-prop-comment': 'error',
  'vue/script-indent': 'error',
  'vue/sort-keys': 'error',
  'vue/static-class-names-order': 'error',
  'vue/v-for-delimiter-style': 'error',
  'vue/v-on-handler-style': 'error',
};

const extensionRules = {
  // @see https://eslint.vuejs.org/rules/#extension-rules
  'vue/array-bracket-newline': 'error',
  'vue/array-bracket-spacing': 'error',
  'vue/array-element-newline': 'error',
  'vue/arrow-spacing': 'error',
  'vue/block-spacing': 'error',
  'vue/brace-style': 'error',
  'vue/camelcase': 'error',
  'vue/comma-dangle': 'error',
  'vue/comma-spacing': 'error',
  'vue/comma-style': 'error',
  'vue/dot-location': 'error',
  'vue/dot-notation': 'error',
  'vue/eqeqeq': 'error',
  'vue/func-call-spacing': 'error',
  'vue/key-spacing': 'error',
  'vue/keyword-spacing': 'error',
  'vue/max-len': 'error',
  'vue/multiline-ternary': 'error',
  'vue/no-constant-condition': 'error',
  'vue/no-empty-pattern': 'error',
  'vue/no-extra-parens': 'error',
  'vue/no-irregular-whitespace': 'error',
  'vue/no-loss-of-precision': 'error',
  'vue/no-sparse-arrays': 'error',
  'vue/no-useless-concat': 'error',
  'vue/object-curly-newline': 'error',
  'vue/object-curly-spacing': 'error',
  'vue/object-property-newline': 'error',
  'vue/object-shorthand': 'error',
  'vue/operator-linebreak': 'error',
  'vue/prefer-template': 'error',
  'vue/quote-props': 'error',
  'vue/space-in-parens': 'error',
  'vue/space-infix-ops': 'error',
  'vue/space-unary-ops': 'error',
  'vue/template-curly-spacing': 'error',
};

const extentedRules = Object.fromEntries(
  Object.entries(extensionRules)
    .map(([key]) => [key, jsRules[key.substring(4)]])
    .filter(([, value]) => value),
);

export default {
  ...uncategorizedRules,
  ...extentedRules,
};
