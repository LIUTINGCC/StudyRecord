### git克隆项目
- git clone https://code.choerodon.com.cn/hzero-hzero/hzero-platform-fe.git

### git切换分支
1. cd hzero-platform-fe
2. git checkout develop
3. git checkout feature-22261


- npm install eslint -g 
- git submodule update --init --recursive 安装子模块


### mall子模块安装问题
git submodule update --init --recursive 如果不成功
文件夹 --> 显示隐藏项目 --> modules --> .git --> modules --> src删掉
gitmodules 路径改为远程路径 https://code.choerodon.com.cn/hzero-hzero/srm-catalogue-mall.git

- yarn 安装依赖
- yarn start 启动项目


### 