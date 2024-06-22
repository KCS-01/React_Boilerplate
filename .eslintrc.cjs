module.exports = {
    root: true,
    env: { browser: true, es2020: true, node: true },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react-hooks/recommended",
        "plugin:react/recommended",
        "plugin:prettier/recommended",
        "prettier",
        "plugin:import/errors",
        "plugin:import/warnings",
        "plugin:import/typescript",
    ],
    ignorePatterns: ["dist", ".eslintrc.cjs", "src/stories/**"],
    parser: "@typescript-eslint/parser",
    plugins: [
        "react-refresh",
        "react",
        "react-hooks",
        "prettier",
        "@typescript-eslint",
        "import",
    ],
    rules: {
        "import/no-named-as-default": "off",
        "react/react-in-jsx-scope": "off",
        "prettier/prettier": "error",
        "import/no-unresolved": 1,
        "import/named": "error",
        "import/default": "off",
        "import/namespace": "error",
        "import/no-unresolved": "off",

        "import/order": [
            "error",
            {
                groups: [
                    ["builtin", "external"],
                    "internal",
                    ["parent", "sibling", "index"],
                ],
                "newlines-between": "always",
                alphabetize: {
                    order: "asc",
                    caseInsensitive: true,
                },
            },
        ],
        "@typescript-eslint/no-unused-vars": [
            "warn",
            { vars: "all", args: "after-used", ignoreRestSiblings: true },
        ],
        "@typescript-eslint/no-explicit-any": "off",
    },
};
