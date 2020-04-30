初始化本地仓库
git init

向git仓库中添加文件,放在暂存区中
git add file1 file2 ....

将暂存区中的文件提交到git上
git commit -m '提交的描述信息'

提交时提示需要输入github的用户名和邮箱
git config --global user.email '你的邮箱账号'
git config --global user.name '你的用户名'

查看当前git仓库的状态
git status

查看当前git仓库的提交记录
git log

将git仓库上传到服务器
先关联远程仓库
git remote add origin 远程仓库的地址
将本地仓库推送到远程服务器
git push -u origin 分支名称
