import Mock from 'mockjs'
import data from './data.json'

// 左侧试卷分类导航栏数据
Mock.mock(/^code\/query/, 'get', (res, req) => {
  return {
    code: 200,
    data: data.sortInfo
  }
})
