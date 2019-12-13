<template>
  <div>
      <el-footer height="50px" id="footer">
          <router-link active-class="active" :to="item.url" v-for="(item,index) in items" :key="index">
              <i class="icon iconfont" :class="item.icon"></i>
              <p>{{item.text}}</p>
          </router-link>
      </el-footer>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
        items:[
            {url:'/life/index',icon:'icon-cc-home',text:'生活'},
            {url:'/news/index',icon:'icon-news',text:'消息'},
            {url:'/supply/index',icon:'icon-fenleihuaban',text:'供应链'},
            {url:'/addressbook/index',icon:'icon-tongxunlu',text:'通讯录'},
            {url:'/my/index',icon:'icon-wo',text:'我'}
        ]
    };
  }
};
</script>

<style scoped>
</style>
