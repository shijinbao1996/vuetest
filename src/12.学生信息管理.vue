<template>
  <div id="app">
    <div>
      <span>姓名:</span>
      <input type="text" v-model="myname" />
    </div>
    <br />

    <div>
      <span>年龄:</span>
      <input type="number" v-model="myage" />
    </div>
    <br />

    <div>
      <span>性别:</span>
      <select v-model="mysex">
        <option value="男">男</option>
        <option value="女">女</option>
      </select>
    </div>
    <br />

    <div>
      <!-- 1、添加 -->
      <button @click="add">添加/修改</button>
      <!-- 4、修改
      <button @click="reviseFn">修改</button> -->
    </div>
    <br />

    <div>
      <table border="1" cellpadding="10" cellspacing="0">
        <tr>
          <th>序号</th>
          <th>姓名</th>
          <th>年龄</th>
          <th>性别</th>
          <th>操作</th>
        </tr>
        <tr v-for="item in list" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.age }}</td>
          <td>{{ item.sex }}</td>
          <td>
            <!-- 2、删除 -->
            <button @click="delFn(item.id)">删除</button>
            <!-- 3、编辑 -->
            <button @click="editFn(item.id)">编辑</button>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [{ id: 1, name: '张三', age: 18, sex: '男' }],
      myname: '',
      myage: '',
      mysex: '男',
      flag: true,
      reindex: '',
    };
  },
  methods: {
    // 1、添加功能

    add() {
      if (this.flag) {
        const id = this.list[this.list.length - 1]
          ? this.list[this.list.length - 1].id + 1
          : 1;
        if (this.myname == '' || this.myage == '' || this.mysex == '')
          return alert('请您重新输入信息');

        this.list.push({
          id,
          name: this.myname,
          age: this.myage,
          sex: this.mysex,
        });
        //添加后清空
        this.myname = '';
        this.myage = '';
        this.mysex = '';
      } else {
        this.list[this.reindex].name = this.myname;
        this.list[this.reindex].age = this.myage;
        this.myname = '';
        this.myage = '';
        this.mysex = '男';
        this.flag = true;
      }
    },
    // 2、删除功能
    delFn(id) {
      let index = this.list.findIndex((ele) => {
        return id == ele.id;
      });
      this.list.splice(index, 1);
    },
    // 3、绑定编辑按，编辑功能，

    editFn(ind) {
      // 该条数据的获取索引
      let index = this.list.findIndex((ele) => {
        return ind == ele.id;
      });
      this.myname = this.list[index].name;
      this.myage = this.list[index].age;
      this.mysex = this.list[index].sex;
      this.flag = false;
      this.reindex = index;
    },
  },
};
</script>

<style>
th,
td {
  border: 1px solid rgb(28, 25, 25);
  width: 150px;
}
</style>
