 cd 文件夹名/:  //进入到下一个文件夹
  git log --pretty=oneline --graph  //  --pretty= oneline 表示 一行显示 ，--graph 让日志显示图谱 ，git log 显示 查看git日志
  git clone -b tran 网址  //表示克隆项目时，并新建分支train
 git push -f origin master//遇到! [rejected] master -> master (non-fast forward)时，使用它。因为把远程仓库和本地同步，消除差异
 
 git checkout -b train origin/train  新建分支并且关联远程分支
 
 git checkout -b master dhyuan/master
 
拉远程代码步骤
git remote -v

git remote add sylu http://192.168.60.43:18001/sylu/tra-lease-ea

git push sylu dev

git remote add origin ssh://git@192.168.60.43:18002/dhyuan/tra-lease-ea.git


git push dhyuan dev


git remote -v

git remote add sylu http://192.168.60.43:18001/sylu/tra-lease-web

git remote add origin http://git@192.168.60.43:18002/dhyuan/tra-lease-web

git checkout -b dev origin/dev

git push dhyuan dev

git remote remove dhyuan



