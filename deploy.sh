#!/usr/bin/env bash

# 确保脚本抛出遇到的错误
set -e

push_addr=$(git remote get-url --push origin)
commit_info=$(git describe --all --always --long 2>/dev/null || echo "deploy")
dist_path=docs/.vuepress/dist
push_branch=gh-pages

# 生成静态文件
pnpm run docs:build

# 进入生成的文件夹
cd "$dist_path"

git init
git config user.name "caiyaling"
git config user.email "973364812@qq.com"
git add -A
git commit -m "build: deploy $commit_info" --no-verify
git push -f "$push_addr" HEAD:"$push_branch"

cd - > /dev/null
rm -rf "$dist_path"
