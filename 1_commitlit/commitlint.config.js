/**
* 默认是 '@commitlint/config-conventional'
* 但是其实也有很多其他的选择
*/
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    "scope-enum": [2, "always", ["blog", "test"]],
    "scope-empty": [2, "never"],
    "subject-min-length": [2, "always", 6],
    "subject-case": [0]
  }
};
