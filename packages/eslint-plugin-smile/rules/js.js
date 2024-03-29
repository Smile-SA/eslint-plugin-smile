// @see https://eslint.org/docs/latest/rules/#possible-problems
const possibleProblemRules = {
  'array-callback-return': 'error',
  'no-await-in-loop': 'error',
  'no-constant-binary-expression': 'error',
  'no-constructor-return': 'error',
  // override eslint:recommended
  'no-debugger': 'warn',
  'no-duplicate-imports': 'error',
  'no-new-native-nonconstructor': 'error',
  'no-promise-executor-return': 'error',
  'no-self-compare': 'error',
  'no-template-curly-in-string': 'error',
  'no-unmodified-loop-condition': 'error',
  'no-unreachable-loop': 'error',
  'no-unused-private-class-members': 'error',
  // override eslint:recommended
  'no-unused-vars': [
    'error',
    {
      args: 'after-used',
      argsIgnorePattern: '^_',
      caughtErrorsIgnorePattern: '^_',
      destructuredArrayIgnorePattern: '^_',
      ignoreRestSiblings: true,
      varsIgnorePattern: '^_',
    },
  ],
  'no-use-before-define': ['error', { variables: false }],
  'require-atomic-updates': 'error',
};

// @see https://eslint.org/docs/latest/rules/#suggestions
const suggestionRules = {
  'accessor-pairs': 'error',
  'arrow-body-style': 'error',
  'block-scoped-var': 'error',
  // camelcase: 'error',
  // 'capitalized-comments': 'error',
  'class-methods-use-this': 'error',
  // 'complexity': 'error',
  'consistent-return': 'error',
  // 'consistent-this': 'error',
  curly: 'error',
  // 'default-case': 'error',
  'default-case-last': 'error',
  'default-param-last': 'error',
  'dot-notation': 'error',
  eqeqeq: ['error', 'always', { null: 'ignore' }],
  'func-name-matching': 'error',
  // 'func-names': 'error',
  'func-style': ['error', 'declaration', { allowArrowFunctions: true }],
  'grouped-accessor-pairs': 'error',
  // 'guard-for-in': 'error',
  // 'id-denylist': 'error',
  // 'id-length': 'error',
  // 'id-match': 'error',
  // 'init-declarations': 'error',
  'logical-assignment-operators': 'error',
  'max-classes-per-file': 'error',
  // 'max-depth': 'error',
  // 'max-lines': 'error',
  // 'max-lines-per-function': 'error',
  // 'max-nested-callbacks': 'error',
  // 'max-params': 'error',
  // 'max-statements': 'error',
  // 'multiline-comment-style': 'error',
  // 'new-cap': 'error',
  'no-alert': 'error',
  'no-array-constructor': 'error',
  'no-bitwise': 'error',
  'no-caller': 'error',
  'no-cond-assign': ['error', 'except-parens'],
  'no-confusing-arrow': 'error',
  'no-console': 'warn',
  // 'no-continue': 'error',
  // 'no-div-regex': 'error',
  'no-else-return': 'error',
  'no-empty-function': 'error',
  'no-empty-static-block': 'error',
  // 'no-eq-null': 'error',
  'no-eval': 'error',
  'no-extend-native': 'error',
  'no-extra-bind': 'error',
  'no-extra-label': 'error',
  'no-floating-decimal': 'error',
  'no-implicit-coercion': 'error',
  'no-implicit-globals': 'error',
  'no-implied-eval': 'error',
  // 'no-inline-comments': 'error',
  'no-invalid-this': 'error',
  'no-iterator': 'error',
  'no-label-var': 'error',
  'no-labels': ['error', { allowLoop: true, allowSwitch: false }],
  'no-lone-blocks': 'error',
  'no-lonely-if': 'error',
  'no-loop-func': 'error',
  // 'no-magic-numbers': [
  //   'error',
  //   {
  //     enforceConst: true,
  //     ignoreArrayIndexes: true,
  //     ignoreClassFieldInitialValues: true,
  //     ignoreDefaultValues: true,
  //   },
  // ],
  'no-mixed-operators': 'error',
  'no-multi-assign': 'error',
  'no-multi-str': 'error',
  // 'no-negated-condition': 'error',
  // 'no-nested-ternary': 'error',
  'no-new': 'error',
  'no-new-func': 'error',
  'no-new-object': 'error',
  'no-new-wrappers': 'error',
  'no-octal-escape': 'error',
  // 'no-param-reassign': 'error',
  // 'no-plusplus': 'error',
  'no-proto': 'error',
  // 'no-restricted-exports': 'error',
  // 'no-restricted-globals': 'error',
  'no-restricted-imports': [
    'error',
    {
      message: 'Please use "import foo from \'@mui/material/foo\'" instead.',
      name: '@mui/material',
    },
  ],
  // 'no-restricted-properties': 'error',
  // 'no-restricted-syntax': 'error',
  'no-return-assign': 'error',
  'no-return-await': 'error',
  'no-script-url': 'error',
  'no-sequences': 'error',
  // 'no-shadow': 'error',
  // 'no-ternary': 'error',
  'no-throw-literal': 'error',
  // 'no-undef-init': 'error',
  // 'no-undefined': 'error',
  'no-underscore-dangle': 'error',
  'no-unneeded-ternary': 'error',
  'no-unused-expressions': [
    'error',
    { allowShortCircuit: true, allowTaggedTemplates: true, allowTernary: true },
  ],
  'no-useless-call': 'error',
  'no-useless-computed-key': 'error',
  'no-useless-concat': 'error',
  'no-useless-constructor': 'error',
  'no-useless-rename': 'error',
  'no-useless-return': 'error',
  'no-var': 'error',
  'no-void': 'error',
  'no-warning-comments': 'warn',
  'object-shorthand': 'error',
  // 'one-var': 'error',
  // 'one-var-declaration-per-line': 'error',
  // 'operator-assignment': 'error',
  'prefer-arrow-callback': 'error',
  'prefer-const': 'error',
  'prefer-destructuring': [
    'error',
    {
      AssignmentExpression: {
        array: false,
        object: false,
      },
      VariableDeclarator: {
        array: false,
        object: true,
      },
    },
  ],
  'prefer-exponentiation-operator': 'error',
  // 'prefer-named-capture-group': 'error',
  // 'prefer-numeric-literals': 'error',
  'prefer-object-has-own': 'error',
  'prefer-object-spread': 'error',
  'prefer-promise-reject-errors': 'error',
  'prefer-regex-literals': 'error',
  'prefer-rest-params': 'error',
  'prefer-spread': 'error',
  'prefer-template': 'error',
  'quote-props': ['error', 'as-needed'],
  radix: 'error',
  'require-await': 'error',
  // 'require-unicode-regexp': 'error',
  'sort-imports': [
    'error',
    {
      allowSeparatedGroups: true,
      ignoreDeclarationSort: true,
      memberSyntaxSortOrder: ['all', 'single', 'multiple', 'none'],
    },
  ],
  'sort-keys': 'error',
  'sort-vars': 'error',
  'spaced-comment': ['error', 'always', { markers: ['/'] }],
  strict: 'error',
  'symbol-description': 'error',
  // 'vars-on-top': 'error', // useless when no-var is enabled
  // 'yoda': 'error',
};

// @see https://github.com/import-js/eslint-plugin-import#helpful-warnings
const importHelpfulWarningsRules = {
  'import/no-deprecated': 'warn',
  'import/no-empty-named-blocks': 'error',
  'import/no-extraneous-dependencies': 'warn',
  'import/no-mutable-exports': 'error',
  // 'import/no-unused-modules': 'error',
};

// @see https://github.com/import-js/eslint-plugin-import#module-systems
const importModuleSystemsRules = {
  'import/no-amd': 'error',
  // 'import/no-commonjs': 'error',
  // 'import/no-import-module-exports': 'error',
  // 'import/no-nodejs-modules': 'error',
  // 'import/unambiguous': 'error',
};

// @see https://github.com/import-js/eslint-plugin-import#static-analysis
const importStaticAnalysisRules = {
  'import/no-absolute-path': 'error',
  // 'import/no-cycle': 'error,
  // 'import/no-dynamic-require': 'error',
  // 'import/no-internal-modules': 'error',
  'import/no-relative-packages': 'error',
  // 'import/no-relative-parent-imports': 'error',
  // 'import/no-restricted-paths': 'error',
  'import/no-self-import': 'error',
  'import/no-useless-path-segments': 'error',
  // 'import/no-webpack-loader-syntax': 'error',
};

// @see https://github.com/import-js/eslint-plugin-import#style-guide
const importStyleGuideRules = {
  'import/consistent-type-specifier-style': ['error', 'prefer-top-level'],
  // 'import/dynamic-import-chunkname': 'error',
  // 'import/exports-last': 'error',
  // 'import/extensions': 'error',
  // 'import/first': ['error', 'absolute-first'], // Replaced by import/order rule
  // 'import/group-exports': 'error',
  // 'import/max-dependencies': 'error',
  'import/newline-after-import': ['error', { considerComments: true }],
  // 'import/no-anonymous-default-export': 'error',
  // 'import/no-default-export': 'error',
  // 'import/no-default-export': 'error',
  'import/no-duplicates': 'error',
  // 'import/no-named-default': 'error',
  // 'import/no-named-export': 'error',
  // 'import/no-namespace': 'error',
  // 'import/no-unassigned-import': 'error',
  'import/order': [
    'error',
    {
      alphabetize: {
        order: 'asc',
        orderImportKind: 'asc',
      },
      groups: [
        'type',
        'builtin',
        'external',
        'internal',
        'parent',
        'sibling',
        'index',
        'object',
      ],
      'newlines-between': 'always',
      pathGroups: [
        {
          group: 'index',
          pattern: '@/**',
          position: 'after',
        },
      ],
      warnOnUnassignedImports: true,
    },
  ],
  // 'import/prefer-default-export': 'error',
};

export default {
  ...possibleProblemRules,
  ...suggestionRules,
  ...importHelpfulWarningsRules,
  ...importModuleSystemsRules,
  ...importStaticAnalysisRules,
  ...importStyleGuideRules,
};
