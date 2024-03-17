// eslint-disable-next-line no-undef
module.exports = {
    root: true,
    env: {
        browser: true,
        es2020: true
    },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "plugin:import/recommended"
    ],
    ignorePatterns: ["dist', '.eslintrc.cjs", "vite.config.ts", "vite-env.d.ts"],
    parser: "@typescript-eslint/parser",
    "parserOptions": {
        "tsconfigRootDir": ".",
        "ecmaVersion": 2020,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        },
        "extraFileExtensions": [".mock.js", ".spec.ts", ".spec.tsx", ".d.ts"]
    },
    plugins: ["react-refresh"],
    settings: {
        react: {
            version: "detect"
        },
        "import/resolver": {
            "node": {
                "extensions": [".js", ".jsx", ".ts", ".tsx"]
            }
        }
    },
    rules: {
        "react-refresh/only-export-components": [
            "warn",
            { allowConstantExport: true },
        ],

        // general code style settings
        "indent": ["error", 4, { SwitchCase: 1 }],
        "quotes": ["error", "double"],
        "max-len": ["error", 300],
        "padded-blocks": "off",
        "eol-last": ["error", "always"],

        // space settings
        "space-in-parens": ["error", "always"],
        "array-bracket-spacing": ["error", "always"],
        "computed-property-spacing": ["error", "always"],
        "object-curly-spacing": ["error", "always", {
            "arraysInObjects": true,
            "objectsInObjects": true
        }],
        "object-property-newline": "error",
        "template-curly-spacing": ["error", "always"],

        // project convient settings
        "no-underscore-dangle": "off",
        "no-plusplus": "off",
        "no-console": "off",

        // best practices
        "arrow-parens": ["error", "as-needed", { "requireForBlockBody": true }],
        "semi": ["error", "always"],

        // react plugin
        "react/prop-types": "off",
        "react/jsx-one-expression-per-line": ["error", { "allow": "single-child" }],
        "react/jsx-indent": ["error", 4],
        "react/jsx-indent-props": ["error", 4],
        "react/jsx-curly-spacing": ["error", "always"],
        "react-hooks/exhaustive-deps": "error",
        "react/require-default-props": ["error", {
            "forbidDefaultForRequired": true,
            "ignoreFunctionalComponents": true
        }],
        "react/button-has-type": "off",
        "react/react-in-jsx-scope": "off",

        // imports plugin
        "import/extensions": "off",
        "import/prefer-default-export": "off",
        "import/no-default-export": "error",
        "import/no-cycle": ["error", { "maxDepth": 5 }],

        // typescript plugin
        // "@typescript-eslint/no-unsafe-assignment": "off",
        // "@typescript-eslint/no-unsafe-call": "off",
        // "@typescript-eslint/no-empty-interface": "off",
        // "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/indent": ["error", 4],
        "@typescript-eslint/quotes": ["error", "double"],

        /*"@typescript-eslint/explicit-function-return-type": [ "error", {
            "allowExpressions": true,
            "allowTypedFunctionExpressions": true,
            "allowHigherOrderFunctions": true
        } ]*/
    },
}
