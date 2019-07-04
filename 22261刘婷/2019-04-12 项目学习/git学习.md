## git 学习
### 版本控制
- 使用git追踪记录文件变化, 使代码文件能回退到历史记录的版本, 从而避免许多错误.
- **避免服务器故障:** 客户端并不只提取最新版本的文件快照，而是把代码仓库完整地镜像下来。 这么一来，任何一处协同工作用的服务器发生故障，事后都可以用任何一个镜像出来的本地仓库恢复。 因为每一次的克隆操作，实际上都是一次对代码仓库的完整备份。
- 示意图  ![](https://git-scm.com/book/en/v2/images/distributed.png)

### 特点
- **直接记录快照，而非差异比较:** 在 Git 中保存项目状态时，它主要对当时的全部文件制作一个快照并保存这个快照的索引。 为了高效，如果文件没有修改，Git 不再重新存储该文件，而是只保留一个链接指向之前存储的文件。 Git 对待数据更像是一个**快照流**。
- **近乎所有操作都是本地执行:** 要浏览项目的历史，Git 不需外连到服务器去获取历史，然后再显示出来——它只需直接从本地数据库中读取。 你能立即看到项目历史。 如果你想查看当前版本与一个月前的版本之间引入的修改，Git 会查找到一个月前的文件做一次**本地的差异计算**，而不是由远程服务器处理或从远程服务器拉回旧版本文件再来本地处理。
- **保证完整性:** Git 中所有数据在存储前都计算校验和，然后以校验和来引用。如果传送过程中丢失文件,则git将会发现
- **Git 一般只添加数据** 
- **三种状态:**
  - 1. 已提交（committed）:数据已经安全的保存在本地数据库中。
  - 2. 已修改（modified）:修改了文件，但还没保存到数据库中。
  - 3. 已暂存（staged）:对一个已修改文件的当前版本做了标记，使之包含在下次提交的快照中。
  - **三个工作区域的概念：** Git 仓库、工作目录以及暂存区域。示意图:
  
  ![](https://git-scm.com/book/en/v2/images/areas.png)

- **工作流程:** 
  1. 在工作目录中修改文件
  2. 暂存文件，将文件的快照放入暂存区域。
  3. 提交已暂存的文件，找到暂存区域的文件，将快照永久性存储到 Git 仓库目录。

### 获取git仓库
- 在目录中初始化git 
  `git init`
- 已有文件的文件夹
  ```
  git add *.c
  git add LICENSE
  git commit -m 'initial project version'
  ```
- 克隆现有仓库
  `git clone https://github.com/libgit2/libgit2  mylibgit`
  将在本地创建一个名为mylibgit的文件夹(url后空格加自定义文件名)
**Git 支持多种数据传输协议:**  https:// 协议, git:// 协议, SSH 传输协议

### 文件的状态变化周期
- 查看文件状态:
  `git status`
- 跟踪未跟踪文件README:
  `git add README`
- 暂存已修改文件:
  `git add README.md`
- 状态简览:
  `git status -s`
  新添加到暂存区中的文件前面有 A 标记，修改过的文件前面有 M 标记。 M 有两个可以出现的位置，出现在右边的 M 表示该文件被修改了但是还没放入暂存区，出现在靠左边的 M 表示该文件被修改了并放入了暂存区。
- 忽略文件
  `cat .gitignore`
  `*.[oa]` 忽略所有以 .o 或 .a 结尾的文件
  `*~` 忽略所有以波浪符（~）结尾的文件
  - 文件 .gitignore 的格式规范如下:
    - 所有空行或者以 ＃ 开头的行都会被 Git 忽略。
    - 可以使用标准的 glob 模式匹配(glob 模式是指 shell 所使用的简化了的正则表达式)。
    - 匹配模式可以以（/）开头防止递归。
    - 匹配模式可以以（/）结尾指定目录。
    - 要忽略指定模式以外的文件或目录，可以在模式前加上惊叹号（!）取反。
- 查看已暂存和未暂存的修改
  - 具体修改了什么地方，可以用 `git diff` 
  - **git diff 本身只显示尚未暂存的改动**
  - 查看已经暂存起来的变化：（--staged 和 --cached 是同义词）` git diff --cached`
- 提交更新
  `git add .` 暂存所有更新
  `git commit -m" "` 提交更新
- 跳过使用暂存区域
  给 git commit 加上 -a 选项，Git 就会自动把所有已经跟踪过的文件暂存起来一并提交，从而跳过 git add 步骤
- 从暂存区域移除文件
  `git rm`
  如果删除之前修改过并且已经放到暂存区域的话，则必须要用强制删除选项 -f
- 保留文件但不让git追踪
  `git rm --cached README`
  git rm 命令后面可以列出文件或者目录的名字，也可以使用 glob 模式
- 移动文件
  文件改名:`git mv file_from file_to`
  相当于运行了下面三条命令：
  `mv README.md README`
  `git rm README.md` --移除
  `git add README` --添加

### 查看提交历史
- `git log `
  - 不用任何参数的话，git log 会按提交时间列出所有的更新，最近的更新排在最上面。
  - 会列出每个提交的 SHA-1 校验和、作者的名字和电子邮件地址、提交时间以及提交说明。
- `git log -p -2`
  - -p 显示每次提交内容的差异, -2 显示最近两次的差异
  - 选项除了显示基本信息之外，还附带了每次 commit 的变化
- `git log --stat`
  - 显示每次提交的简略的统计信息
  - 列出所有被修改过的文件、有多少文件被修改了以及被修改过的文件的哪些行被移除或是添加了。 在每次提交的最后还有一个总结。
- `git log --pretty=oneline`
  - 指定使用不同于默认格式的方式展示提交历史。
  - oneline 将每个提交放在一行显示，查看的提交数很大时非常有用。 另外还有 short，full 和 fuller .
- `git log --pretty=format:"%h - %an, %ar : %s"`
  - 格式化显示记录
  - 当 oneline 或 format 与另一个 log 选项 --graph 结合使用时尤其有用。 这个选项添加了一些ASCII字符串来形象地展示你的分支、合并历史：
    - `git log --pretty=format:"%h %s" --graph`
- 限制输出
  - `git log --since=2.weeks`
    - 显示最近两周的提交信息
    - 可以使用多种时间格式如: 2008-01-15   2 years 1 day 3 minutes ago
    - --author 选项显示指定作者的提交，用 --grep 选项搜索提交说明中的关键字。
    - 如果要得到同时满足两个选项搜索条件的提交，就必须用 --all-match 选项。否则，满足任意一个条件的提交都会被匹配出来.
  - `git log -Sfunction_name`
    - 显示该函数的提交/修改信息
  - `git log url`限制路径
  - 不同限制条件用--隔开:
    - `git log --pretty="%h - %s" --author=gitster --since="2008-10-01" \
   --before="2008-11-01" --no-merges -- t/`

### git撤销操作
- 提交信息错误或有文件未添加:
  `git commit --amend`
  最终只会有一个提交 - 第二次提交将代替第一次提交的结果。
- 取消暂存文件
  ` git reset HEAD CONTRIBUTING.md`
- 撤销对文件的修改
  `git checkout -- CONTRIBUTING.md`
- **在 Git 中任何 已提交的 东西基本都是可以恢复的**

### 远程仓库的使用
- 查看远程仓库
  `git remote`
- 显示使用 Git 保存的远程仓库简写与其对应的 URL
  `git remote -v`
- 添加远程仓库
  `git remote add pb https://github.com/paulboone/ticgit`
  pd为指定的简写, 后续操作可以在命令行中使用字符串 pb 来代替整个 URL。
- 从远程仓库获取本地没有数据
  `git fetch [remote-name]`
- 推送数据到远程
  `git push origin master`
  **别人推送后就不能直接推送, 需要先拉取最新数据到本地**
- 查看远程仓库
  `git remote show origin`
  列出远程仓库的 URL 与跟踪分支的信息
  `git remote show `可以看到更多详细信息
- 远程仓库的重命名
  `git remote rename pb paul`
  将pb 重命名为paul
  **将会修改远程分支名字**
- 远程仓库移除
  `git remote rm paul`

### 添加标签
- 列出标签
  `git tag`
  以字母顺序列出标签
- 创建标签
  - 轻量标签（lightweight）
    - 只是一个特定提交的引用。
    - 创建轻量标签，不需要使用 -a、-s 或 -m 选项，只需要提供标签名字
    - `git tag v1.4-lw`
    - git show 命令只会显示出提交信息
  - 附注标签（annotated)
    - 附注标签是存储在 Git 数据库中的一个完整对象。 它们是可以被校验的；其中包含打标签者的名字、电子邮件地址、日期时间；还有一个标签信息；并且可以使用 GNU Privacy Guard （GPG）签名与验证。
    - `git tag -a v1.4 -m 'my version 1.4'`
  - 显示标签信息与对应的提交信息:
    `git show v1.4`
- 后期标签
  - 先获取提交索引:
    `git log --pretty=oneline`
  - 再用索引添加标签:
    `git tag -a v1.2 9fceb02` "9fceb02"为索引简写
- 共享标签
  `git push origin v1.5`
- 删除轻量标签
  `git tag -d v1.4-lw`
  然后使用 `git push <remote> :refs/tags/<tagname>` 来更新远程仓库
- 检出标签, 查看某个标签所指向的文件版本
  `git checkout 2.0.0`

### 别名
- 为常用命令添加别名
  `git config --global alias.ci commit`
  git ci 等价于 git commit
   为取消暂存添加别名:
  `git config --global alias.unstage 'reset HEAD --'`
  `git unstage fileA` 等价于 `git reset HEAD -- fileA`
- 为最后一次提交添加别名:
  `git config --global alias.last 'log -1 HEAD'`
  查看最后一次提交: `git last`
- 为外部命令添加别名:(在命令前加 !)
  `git config --global alias.visual '!gitk'` 

### 分支
- Git 仓库中有五个对象：三个 blob 对象（保存着文件快照）、一个树对象（记录着目录结构和 blob 对象索引）以及一个提交对象（包含着指向前述树对象的指针和所有提交信息）:  
![](https://git-scm.com/book/en/v2/images/commit-and-tree.png)
- Git 的分支，其实本质上仅仅是指向提交对象的可变指针
- 分支创建
  `git branch testing`
- 查看各个分支当前所指对象
  `git log --oneline --decorate`
- 切换分支
    `git checkout testing`
- 分支切换示意图:

**初始状态/创建分支**
`git branch testing`  
![](https://git-scm.com/book/en/v2/images/head-to-master.png)

**切到分支**
`git checkout testing`  
![](https://git-scm.com/book/en/v2/images/head-to-testing.png)

**修改分支**  
![](https://git-scm.com/book/en/v2/images/advance-testing.png)

**切回master**
`git checkout master`  
![](https://git-scm.com/book/en/v2/images/checkout-master.png)

**修改master分支**  
![](https://git-scm.com/book/en/v2/images/advance-master.png)

-查看分支历史
`git log --oneline --decorate --graph --all`

### 新建和合并分支
- 一般步骤:
  - 实现新需求, 创建新分支
  - 在新分支开发
  - 开发测试完毕,将该分支合并到项目分支
  - 然后在创建的分支上继续开发
流程示意图:  
![](https://git-scm.com/book/en/v2/images/basic-branching-4.png)

- 合并分支到master
 `git checkout master`
 `git merge hotfix`
 此时master 和hotfix 指向同一个地址, 删除hotfix分支
 `git branch -d hotfix`  
 ![](https://git-scm.com/book/en/v2/images/basic-branching-5.png)

 其他分支继续开发:  
 ![](https://git-scm.com/book/en/v2/images/basic-branching-6.png)

 - 分支合并步骤:
   1. `git checkout master`
   2. `git merge iss53`
   3. `git branch -d iss53`

- 合并遇到冲突:(解决后才能合并)
  - 解决冲突后暂存
  - `git status` 查看状态
  - `git commit` 合并提交
  - 然后merge
  
### 分支管理
- 获取当前分支列表:
  `git branch` *字符表示当前所在分支
- 查看每个分支最后一次提交:
  `git branch -v`
- 查看哪些分支已经合并到当前分支
  `git branch --merged`列表中没有*的可以删掉,因为已经合并
- 查看未合并分支:
  `git branch --no-merged`
  **未合并分支不能删除**

### 分支开发工作流
- 长期分支
  master只保留在完全稳定的代码版本,在其他分支上继续开发:  
  ![](https://git-scm.com/book/en/v2/images/lr-branches-1.png)

- 渐进稳定分支
  一层一层筛选稳定的代码:十分稳定 --> 一般稳定 --> 不稳定  
  ![](https://git-scm.com/book/en/v2/images/lr-branches-2.png)

- 特性分支
  短期分支  
  ![](https://git-scm.com/book/en/v2/images/topic-branches-2.png)

### 远程分支
- 获取远程分支列表
  `git ls-remote (remote)`
  显示更多信息
  ` git remote show (remote)`
- 获取远程数据
  `git fetch origin`
  查找 “origin” 是哪一个服务器
- 更新远程数据(但不合并)
  `git fetch`  
  ![](https://git-scm.com/book/en/v2/images/remote-branches-4.png)

- 添加远程仓库  
  ![](https://git-scm.com/book/en/v2/images/remote-branches-5.png)

- 共享分支serverfix:
  `git push origin serverfix`
- 将当前工作合并到分支
  `git merge origin/serverfix `
- 跟踪分支
  `git checkout --track origin/serverfix`
  重命名 `git checkout -b sf origin/serverfix`
- 设置已有的本地分支跟踪一个刚刚拉取下来的远程分支，或者想要修改正在跟踪的上游分支
  `git branch -u origin/serverfix`
- 查看所有跟踪分支
  `git branch -vv`
- 如果想要统计最新的领先与落后数字，需要在运行此命令前抓取所有的远程仓库
  `git fetch --all; git branch -vv`
- pull/获取远程数据并合并
- 删除远程分支
  `git push origin --delete serverfix`

### 分支-变基
整合不同分支一般方法有: merge / rebase
- 三方merge时的操作, 创建父级快照  
  ![](https://git-scm.com/book/en/v2/images/basic-rebase-1.png)

  ![](https://git-scm.com/book/en/v2/images/basic-rebase-2.png)
- 变基操作:将experiment分支变基到 master前一级中
  `git checkout experiment`
  `git rebase master`  
  ![](https://git-scm.com/book/en/v2/images/basic-rebase-3.png)

- 合并:
  `git checkout master`
  `git merge experiment`

- 复杂的变基
  - 先变基client  
    ![](https://git-scm.com/book/en/v2/images/interesting-rebase-1.png)  
    ![](https://git-scm.com/book/en/v2/images/interesting-rebase-2.png)

  - 此时可以快速合并
    `git checkout master`
    `git merge client`  
    ![](https://git-scm.com/book/en/v2/images/interesting-rebase-3.png)

  - 继续变基server  
    ![](https://git-scm.com/book/en/v2/images/interesting-rebase-4.png)

  - 然后快速合并  
    ![](https://git-scm.com/book/en/v2/images/interesting-rebase-5.png)

**合并有风险,变基需谨慎**
**不要对在你的仓库外有副本的分支执行变基。**

变基操作的实质是丢弃一些现有的提交，然后相应地新建一些内容一样但实际上不同的提交