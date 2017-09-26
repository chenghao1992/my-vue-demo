<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2 v-if="true">yes</h2>
    <h2 v-else>no</h2>
    <h3 :class="{active:isActive,noActive:!isActive}">测试样式<button @click="changeColor">改变颜色</button></h3>
    <p><span>{{count}}</span><button @click="add">点击加一</button></p>
    <p><span>{{count}}</span><button @click="reduce">点击减一</button></p>
    <span>{{computedAttribute}}</span>
    <p><span>vuex 测试：{{testNum}}</span><button @click="changeTestNum">点击发送dispacth</button></p>
    <p><button @click="loadImgs">点击加载title</button></p>
    <div>
      <p v-for="item in imgArrs" v-if="item.title.length>25">
        {{item.title}}
      </p>
    </div>
  </div>
</template>

<script>
  import Api from '../api/index'
  import { mapState, mapActions,mapGetters  } from 'vuex'

  export default {
  name: 'test',
  data () {
    return {
      msg: 'learn vue',
      count:1,
      a:'计算属性初始值',
      myNum:666,
      isActive:false
//      imgArrs:[]
    }

  },
  methods:{
    changeColor:function () {
      this.isActive=!this.isActive
    },
    add:function () {
      this.count++;
    },
    //Es6箭头函数的this指向不同,容易出问题,尽量使用Es5的写法
    reduce:()=>{
      console.log(this);
      this.count--;
    },
    changeTestNum:function () {
      this.$store.dispatch('changeTestNum',this.myNum)
    },
    loadImgs:function () {
      this.$store.dispatch('loadImgs')
    }
  },
  computed:{
    computedAttribute:()=>this.a='改变后的计算属性',
    ...mapState({
      testNum: state => state.test1,
      imgArrs:state=>{
        console.log(state.lists);
        return state.lists;

      }
    })
  },
  created(){
    console.log("实例创建完成")
    Api.getNews({param1:'测试参数'}).then(res=>{
      console.log(res)
    })
    this.$store.dispatch('addNum',this.count)
    console.log(this.$route);
    console.log(this.$router);
    console.log(this.$store);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.active{
  color: red;
}
.noActive{
  color: blue;
}
</style>
