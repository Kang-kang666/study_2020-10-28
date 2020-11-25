import Mock from 'mockjs'
import data from './data.json'

import getParams from '@/utils/getParams.js'
// 左侧试卷分类导航栏数据
Mock.mock(/^code\/query/, 'get', (res, req) => {
  return {
    code: 200,
    data: data.sortInfo
  }
})
// 右侧某试卷所有题目信息数据
Mock.mock(/^personList\/list/, 'get', (res, req) => {
  return {
    code: 200,
    data: data.tableInfo
  }
})

// 试卷某道题目的信息分类列表
Mock.mock(/^accountInformation\/query/, 'get', (res, req) => {
  return {
    code: 200,
    data: data.detailList
  }
})
// 试卷某道题目的信息详情
Mock.mock(/^detailInfo\/queryDetail/, 'get', (res, req) => {
  return {
    code: 200,
    data: data.detailInfo
  }
})

// 添加题目
Mock.mock(/\/addIssue/, 'get', (res, req) => {
  const { url } = res
  let obj = getParams(url)
  data.tableInfo.dataList.push(obj)
  return {
    code: 200,
    msg: 'success'
  }
})