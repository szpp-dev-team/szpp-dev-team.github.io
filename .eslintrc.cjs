require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,

  env: {
    node: true,
  },

  extends: [
    "plugin:vue/vue3-essential",
    "@vue/eslint-config-airbnb-with-typescript",
    "@vue/eslint-config-prettier",
  ],

  parserOptions: {
    ecmaVersion: "latest",
  },

  rules: {
    "vue/component-tags-order": [
      "error",
      {
        order: ["script", "template", "style"],
      },
    ],
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/typedef": [
      "error",
      {
        variableDeclaration: false,
        memberVariableDeclaration: true,
        propertyDeclaration: true,
        variableDeclarationIgnoreFunction: true,
        arrayDestructuring: false,
        objectDestructuring: false,
        parameter: false,
        arrowParameter: false,
      },
    ],
  },
};
