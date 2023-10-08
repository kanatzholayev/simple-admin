// module.exports = {
//   root: true,
//   env: { browser: true, es2020: true },
//   extends: [
//     'eslint:recommended',
//     'plugin:@typescript-eslint/recommended',
//     'plugin:react-hooks/recommended',
//   ],
//   ignorePatterns: ['dist', '.eslintrc.cjs'],
//   parser: '@typescript-eslint/parser',
//   plugins: ['react-refresh'],
//   rules: {
//     'react-refresh/only-export-components': [
//       'warn',
//       { allowConstantExport: true },
//     ],
//   },
// }

module.exports = {
	extends: [
		`airbnb`,
		`airbnb/hooks`,
		`plugin:promise/recommended`,
		`plugin:sonarjs/recommended`,
		`plugin:prettier/recommended`,
	],
	plugins: [
		`optimize-regex`,
		`simple-import-sort`,
		`styled-components-varname`,
		`better-styled-components`,
		`prefer-arrow-functions`,
	],
	ignorePatterns: [`**/dist/**/*.*`],
	rules: {
		'import/prefer-default-export': [`off`],
		'import/no-default-export': [`error`],
		'react/function-component-definition': [
			`error`,
			{
				namedComponents: `arrow-function`,
			},
		],
		'react/jsx-props-no-spreading': [`off`],
		'react/require-default-props': [`off`],
		'react/jsx-key': [`error`],
		'no-restricted-syntax': [`error`, `ForInStatement`, `LabeledStatement`, `WithStatement`],
		'no-plusplus': [`off`],
		'no-void': [
			`error`,
			{
				allowAsStatement: true,
			},
		],
		'func-names': [`warn`, `as-needed`, { generators: `never` }],
		curly: [`error`, `all`],
		'@typescript-eslint/no-use-before-define': [`error`, { functions: false, classes: false }],
		'simple-import-sort/imports': [
			`error`,
			{
				groups: [
					[`^react`, `^@?\\w`],
					[`^(app|features|shared|processes|entities|pages)(/.*|$)`, `^\\.`],
				],
			},
		],
		'optimize-regex/optimize-regex': `warn`,
		'@typescript-eslint/no-magic-numbers': [
			`warn`,
			{
				ignoreNumericLiteralTypes: true,
				ignoreEnums: true,
				enforceConst: true,
				ignoreReadonlyClassProperties: true,
				ignore: [-1, 0, 1],
			},
		],
		'@typescript-eslint/quotes': [`error`, `backtick`],
		'newline-before-return': `error`,
		'react/self-closing-comp': [
			`error`,
			{
				component: true,
				html: true,
			},
		],
		'react/no-unstable-nested-components': [`error`, { allowAsProps: true }],
		'prettier/prettier': [
			`error`,
			{
				printWidth: 120,
				tabWidth: 4,
				useTabs: true,
				semi: true,
				singleQuote: true,
				jsxSingleQuote: true,
				trailingComma: `all`,
				bracketSpacing: true,
				jsxBracketSameLine: false,
				arrowParens: `avoid`,
			},
			{ usePrettierrc: false },
		],
		'styled-components-varname/varname': [
			`error`,
			{
				tagStyle: {
					// eslint-disable-next-line @typescript-eslint/quotes
					suffix: 'Styled',
				},
			},
		],
		'better-styled-components/sort-declarations-alphabetically': 2,
		'import/no-extraneous-dependencies': `off`,
		'import/no-cycle': [`error`],
		'arrow-body-style': [`error`, `as-needed`],
		'sonarjs/no-nested-template-literals': [`off`],
		'promise/prefer-await-to-then': [`error`],
		'prefer-arrow-functions/prefer-arrow-functions': `error`,
		'no-param-reassign': [`error`, { props: false }],
		'react/react-in-jsx-scope': [`off`],
		'no-console': [`error`, { allow: [`warn`, `error`] }],
		'consistent-return': [`off`],
	},
	overrides: [
		{
			files: [`*.ts`, `*.tsx`],
			extends: [
				`airbnb-typescript`,
				`plugin:@typescript-eslint/recommended`,
				`plugin:@typescript-eslint/recommended-requiring-type-checking`,
				`plugin:prettier/recommended`,
			],
			parser: `@typescript-eslint/parser`,
			parserOptions: {
				project: [`./tsconfig.json`],
			},
			rules: {
				'@typescript-eslint/no-misused-promises': [
					`error`,
					{
						checksVoidReturn: {
							attributes: false,
							returns: false,
						},
					},
				],
				'@typescript-eslint/explicit-function-return-type': [
					`error`,
					{
						allowExpressions: true,
					},
				],
				'@typescript-eslint/no-floating-promises': [
					`error`,
					{
						ignoreIIFE: true,
						ignoreVoid: true,
					},
				],
				'@typescript-eslint/no-unnecessary-condition': [`error`],
				'import/no-extraneous-dependencies': [
					`error`,
					{
						devDependencies: true,
					},
				],
				'@typescript-eslint/quotes': [`error`, `backtick`],
				'@typescript-eslint/no-unused-vars': [`error`, { argsIgnorePattern: `^_`, ignoreRestSiblings: true }],
				'arrow-body-style': [`error`, `as-needed`],
				curly: [`error`, `all`],
				'@typescript-eslint/naming-convention': [
					`error`,
					{
						selector: `variable`,
						format: [`camelCase`, `PascalCase`, `UPPER_CASE`],
					},
				],
				'react/prop-types': [`off`],
				'no-implicit-coercion': [`error`, { disallowTemplateShorthand: true, allow: [`!!`] }],
			},
		},
		{
			files: [`*.json`],
			parser: `@typescript-eslint/parser`,
			parserOptions: {
				project: false,
			},
			rules: {
				'no-unused-expressions': `off`,
				'sonarjs/no-duplicate-string': `off`,
				quotes: `off`,
				'@typescript-eslint/quotes': `off`,
				'no-template-curly-in-string': `off`,
			},
		},
		{
			files: [`**/*.spec.ts`, `**/*.spec.tsx`, `**/dsl/**`],
			extends: [`plugin:jest/recommended`, `plugin:testing-library/react`],
			rules: {
				'jest/no-focused-tests': `error`,
				'jest/no-identical-title': `error`,

				'testing-library/prefer-user-event': [`error`],
				'testing-library/prefer-wait-for': [`error`],

				'no-shadow': `off`,
				'max-classes-per-file': `off`,

				'@typescript-eslint/no-magic-numbers': `off`,
				'@typescript-eslint/indent': `off`,
				'@typescript-eslint/explicit-function-return-type': `off`,
				'@typescript-eslint/member-ordering': `off`,
				'@typescript-eslint/no-non-null-assertion': `off`,
				'@typescript-eslint/no-empty-function': `off`,

				'sonarjs/no-duplicate-string': `off`,
				'sonarjs/no-identical-functions': `off`,
			},
		},
		{
			files: [`*.js`],
			rules: {
				'@typescript-eslint/no-var-requires': `off`,
			},
		},
	],
};
