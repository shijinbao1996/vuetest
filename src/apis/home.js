import request from "@/utils/request";

// 导出接口
export const getRecommendList = (params)=>{
  return request({
    url:'/personalized',
    params
  })
}

export const getNewsongList = (params)=>{
    return request({
        url:'/personalized/newsong',
        params
    })
 }