### git重命名分支

1. git branch -m oldBranchName newBranchName
2. 删除远程分支: git push origin :oldBranchName
3. 将重命名过的分支提交: git push origin newBranchName


### git中Stash的用法

#### stash的作用

1. 将已经暂存但还未提交的改动存储起来, 在处理完分支上其他事务后可以将存储的改动调出来, 然后提交到远程分支
2. 方便在分支之间切换工作
   
#### stash的使用

1. 查看几次不同的stash存储
   `git stash list`
2. 调出需要提交的存储, 变为暂存
   `git stash apply stash@{0}`
3. 移除某次存储
   `git stash drop stash@{0}`
4. 取消存储
   `git stash show -p stash@{0} | git apply -R`


## lerna管理package

#### 作用

    最初开开发package的时候，没有什么自动化的工具。发布package的时候，都是手动修改版本号。当数量逐渐增多的时候，且这些packages之间还有依赖关系的时候，开发过程繁琐。

lerna用于管理复杂的, 相互依赖的packages

#### 特点

1. 自动解决packages之间的依赖关系
2. 通过git 检测文件改动，自动发布
3. 根据git 提交记录，自动生成changelog
   
#### 模式

1. lerna的默认模式是Fixed/Locked mode

    在这种模式下，实际上lerna是把工程当作一个整体来对待。每次发布packges，都是全量发布，无论是否修改。

2. Independent mode
   
   lerna会配合Git，检查文件变动，只发布有改动的packge。

## LESS中的作用域

1. 与JS类似, 内部优先级高于外部
2. 变量间的赋值属于浅拷贝
3. 新的值将会覆盖旧值
