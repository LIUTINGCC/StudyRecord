### git报错fatal: refusing to merge unrelated histories

拒绝合并不相关历史
1. git checkout master #切换到要提交代码的分支
2. git pull origin master --allow-unrelated-histories #加上后面这个选项允许不相关历史提交
3. git push origin master #提交到远程分支

### git创建仓库提交代码
1. 在目标目录git bash
   `git init`
2. 暂存新内容
   `git add .`
3. 保存到本地
   `git commit -m '提交信息'`
   如果不加-m, 按shift+: 然后输入wq
4. 链接到远程仓库
   `git remote add origin 远程仓库的链接`
5. 从远程拉取代码
   `git pull origin master`
   可能出现上述报错, 解决后继续
6. 提交代码到远程
   `git push origin master`
7. 新建分支
   `git branch newBranchName`
8. 查看分支
   `git branch -a`
9. 切换分支
    `git checkout newBranchName`
10. 将分支的改动合并到主分支
    `git merge newBranchName`
11. 删除分支
    `git branch -D newBranchName`
12. 存储未提交的暂存
    `git stash`
13. 查看几次不同的stash存储
   `git stash list`
14. 调出需要提交的存储, 变为暂存
   `git stash apply stash@{0}`
15. 移除某次存储
   `git stash drop stash@{0}`
16. 取消存储
   `git stash show -p stash@{0} | git apply -R`


