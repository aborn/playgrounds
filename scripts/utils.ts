export const simpleParser = (text: string) => {
  let lines = text.split('\n');
  let count = 0;
  let result = {}
  let legalKeys = ['title', 'author', 'categories', 'category', 'tags', 'tag', 'date', 'permalink']
  for (var i = 0; i < lines.length; i++) {
    if ('---' === lines[i].trim()) {
      count++
      if (count === 2) {
        break
      }
    }

    if (lines[i].includes(':')) {
      let keyValue = lines[i].split(/:(.*)/s);
      let key = keyValue[0].trim()
      let value = keyValue[1].trim()
      if ('author' === key) {
        result[key] = parseToJson(value)
      } else {
        if (legalKeys.indexOf(key) >= 0) {
          result[key] = value
        }
      }
    }
  }

  return result
}

// input str text = 'name: 王子晨, link: wangzichen' 或 '{name: 王子晨, link: wangzichen}'
// out: {name: "王子晨", link: "wangzichen"}
export const parseToJson = (text: string) => {
  let textVaule = (text.trim().startsWith('{') && text.trim().endsWith('}')) ?
    text.substring(text.indexOf('{') + 1, text.indexOf('}')) : text
  let obj = {}
  for (let item of textVaule.split(',')) {
    if (item.includes(':')) {
      let itemArr = item.split(':')
      obj[itemArr[0].trim()] = itemArr[1].trim();
    }
  }
  return obj
}

let a = `---
title: 比心质量大盘从零到一的探索与实践
author: {name: 王子晨, link: wangzichen}
date: 2022-05-11 21:00:31
permalink: /pages/8dd81c/
categories:
  - 月刊发布
  - 2022
  - 四月发布
tags:
  - 质量
---


## 什么是质量大盘？
`
console.log(simpleParser(a))