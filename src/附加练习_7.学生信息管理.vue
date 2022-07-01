<template>
  <div id="app">
    <div>
      <span>姓名:</span>
      <input type="text" v-model="name"/>
    </div>
    <div>
      <span>年龄:</span>
      <input type="number" v-model="age"/>
    </div>
    <div>
      <span>性别:</span>
      <select v-model="sexss">
        <option  value="男">男</option>
        <option  value="女">女</option>
      </select>
    </div>
    <div>
      <button @click="add">添加/修改</button>
    </div>
    <div>
      <table
        border="1"
        cellpadding="10"
        cellspacing="0"
      >
        <tr>
          <th>序号</th>
          <th>姓名</th>
          <th>年龄</th>
          <th>性别</th>
          <th>操作</th>
        </tr>
        <tr v-for="(item,index) in arr" :key="item.id">
          <td >{{index +1}}</td>
          <td>{{item.name}}</td>
          <td>{{item.age}}</td>
          <td>{{item.sex}}</td>
          <td>
            <button @click="del(index)">删除</button>
            <button @click="edit(index)">编辑</button>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
        arr:[
            {id:1,name:'Tom',age:18,sex:'男'},
            {id:2,name:'Jack',age:21,sex:'男'},
            {id:3,name:'Helln',age:16,sex:'女'},
        ],
        name:'',
        age:0,
        sexss:'男'
    }
  },
  methods:{
    add(){
        const id = this.arr[0]? this.arr[this.arr.length-1].id +1:1
    if(this.name.trim() == '' ) return alert('请输入内容')
    this.arr.push({
        id,
        name:this.name,
        age:this.age,
        sex:this.sexss
    })
    this.name ='',
    this.age = 0,
    this.sexss = '男'
    },
    del(index){
      this.arr.splice(index,1)
    },
    edit(index){
     this.arr[index] =
      {
        name:this.name,
        age:this.age,
        sex:this.sexss
    }
    }
  }
}
</script>
