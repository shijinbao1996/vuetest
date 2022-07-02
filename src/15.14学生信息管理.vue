<template>
  <div id="app">
    <div>
      <span>姓名:</span>
      <input type="text" v-model.trim="name" placeholder="请输入姓名" />
    </div>
    <br />

    <div>
      <span>年龄:</span>
      <input type="number" v-model.number="age" placeholder="请输入年龄" />
    </div>
    <br />

    <div>
      <span>性别:</span>
      <select v-model="sex">
        <option :value="1">男</option>
        <option :value="0">女</option>
      </select>
    </div>
    <br />

    <div>
      <!-- 1、添加 -->
      <button @click="addFn">{{ isEdit ? '修改' : '添加' }}</button>
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
          <td>{{ { 1: '男', 0: '女' }[item.sex] }}</td>
          <td>
            <!-- 2、删除 -->
            <button>删除</button>
            <!-- 3、编辑 -->
            <button @click="editFn(item)">编辑</button>
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
      list: [{ id: 1, name: '张三', age: 18, sex: 1 }],
      name: '',
      age: '',
      sex: 1,
      currentId: '',
      isEdit: false, // false 代表没有处于编辑  true  代表处于编辑
    };
  },
  methods: {
    addFn() {
      if (this.isEdit) {
        // this.isEdit  true 处于编辑状态
        // 改完之后的数据保存进去
        // 当前这个数据的id
        const index = this.list.findIndex((ele) => {
          return ele.id == this.currentId;
        });
        this.list[index].name = this.name;
        this.list[index].age = this.age;
        this.list[index].sex = this.sex;
        //编辑完，再次便会添加
        this.isEdit = false;
        //清除编辑的那个id
        this.currentId = '';
        //清除输入框
        this.cleanFn();
        alert('修改完成');
        return;
      }
      // 1、添加功能
      if (this.name == '' || this.age == '') {
        return alert('Please enter a name,age');
      }
      let id = this.list[this.list.lenght - 1]
        ? this.list[this.list.lenght - 1].id + 1
        : 100;
      this.list.push({
        id,
        name: this.name,
        age: this.age,
        sex: this.sex,
      });

      // 清空
      // this.name = '';
      // this.age = '';
      // this.sex = 1;
      this.cleanFn();
    },

    // 2、编辑功能,把item传入实参
    editFn(data) {
      // 1、改变变量
      this.isEdit = true;
      // 2、显示点击的那条数据
      this.name = data.name;
      this.age = data.age;
      this.sex = data.sex;
      // 3、保存编辑的id
      this.currentId = data.id;
      // 4、清空内容
    },

    //3、清空
    cleanFn() {
      this.name = '';
      this.age = '';
      this.sex = 0;
    },
  },
};
</script>

<style>
thead,
tbody,
tfoot,
tr,
td,
th {
  border-width: 1px;
  width: 150px;
  text-align: center;
}
</style>
