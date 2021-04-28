#!/usr/bin/env sh

# 當發生錯誤時中止腳本
set -e

# 建立
npm run build

# cd 到生成輸出的目錄下
cd dist

git init
git add -A
git commit -m 'deploy'

# 部署到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:yunlew531/vue-wowo-room.git master:gh-pages

cd -