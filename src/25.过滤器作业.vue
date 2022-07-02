<template>
  <div>
    <h1>处理粉丝数量</h1>
    <p>国内网站粉丝数量：{{funs|funsDone(10000,'万')}}</p>
    <p>外国网站粉丝数量：{{funs|funsDone(1000,'千')}}</p>

    <h1>处理时间戳</h1>
    <p>时间：{{time|timeDone('-')}}</p>
    <p>时间：{{time|timeDone('/')}}</p>
    
  </div>
</template>

<script>
import moment from 'moment'
export default {
    data(){
        return{
          funs:1878291,
          time: +new Date()
        }
    },
     filters:{
        funsDone(val,count,num){
          return val/count + num
        },
        timeDone(val,symbol){
          return moment(val).format(`YYYY${symbol}MM${symbol}DD`)
        }
     }
}
</script>

<style>

</style>