# commit lint

> 终于开始我心驰神往的前端工程化的研究了，webpack什么的放在webpack里面说，这里主要说一些其他的，如规范，发布，这些，当然应该还有很多，这个需要一点一点去研究

首先，是提交规范，这个是个老生长叹的问题，我心里对提交只写aaa的人一致mmp，所以重点来搞一下这个东西，接下来我们会使用到业界良心@commentlint 和husky，@commentlint是用来做commit格式验证的，分为本地和服务端，(md，终于可以从源头治之sb的行为了)，@commitlint/cli就是命令行，@commitlint/conventional 是一个便捷版本的规则配置，husky是一个git hooks继承器，可以访问git的hooks
详细的配置可以访问

[@commonlint](https://marionebl.github.io/commitlint/#/)
[husky](https://github.com/typicode/husky)

## rules
规则都是可以重写，规则也是都可以被扩展的（extends 扩展文件即可），rules里面详细的说明都可以看commitlint的文档，这里主要说的是rule的格式，记住是rule，不是rules，单条rule其实是一个数组，[0]是rule的名称，如"scope-enum"，[1]是level，具体level可以查看[rule的配置文档](https://marionebl.github.io/commitlint/#/reference-rules)
[2]是对应的值

接下来就是上代码
```
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    "scope-enum": [2, "always", ["blog", "test"]],
    "scope-empty": [2, "never"],
    "subject-min-length": [2, "always", 6]
  }
};
```
