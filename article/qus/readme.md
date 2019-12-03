# 整理

## git

- 问题1:**Git account Configuration is error.**错误：提交人没有该仓库权限

  <img src="../../../../Library/Application Support/typora-user-images/image-20191122145812516.png" alt="image-20191122145812516" style="zoom:50%;" />

该问题通常出现这个错误提示的原因是由于使用的git仓库是基于ssh协议的(非https)，需要密钥对并建立连接。执行 git commit 的时候本地提交不受 ssh 协议限定，也不会检测用户权限，但是提交信息会以 git config user.name 为名，所以在提交日志中出现了非法权限提交。

#### 解决方法 ：

首先`git log origin/[分支名]`

1. 如果结果中最新一笔commit的committer邮箱不是你的邮箱

   - `git config -e`设置name，email

   - 更新账号信息git commit --amend --reset-author

   - 重新push

2. 如果结果中最新一笔commit的committer邮箱不是你的邮箱

   - `git config -e`设置name，email

   - 更新账号信息git commit --amend --reset-author

   - git rebase命令或者git reset –hard logID(我提交之前的log ID)
   - 重新push

