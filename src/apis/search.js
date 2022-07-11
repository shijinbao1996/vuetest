import request from "@/utils/request";
export const getSearchList = (params)=>
    request({
        url:'/search/hot',
        params
    })
    
export const getSearchResult = (params)=> 
request({
   url:'/cloudsearch',
   params
})
 