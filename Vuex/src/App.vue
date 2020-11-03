<template>
  <div id="app">
      <div style="width:250px">
        <TitleMenu :isActive="select" @active="select=true">
        <template v-slot:title>发现频道</template>
        <template v-slot:icon>></template>
        </TitleMenu>
      </div> 
      <addition></addition>
      <p>----------------------------</p>
      <subtraction></subtraction>
  </div>
</template>

<script>
import TitleMenu from "@/components/TitleMenu.vue";
import addition from "@/components/addition.vue";
import subtraction from "@/components/subtraction.vue";
export default {
  data(){
    return{
      select:false
    }
  },
  components:{
    TitleMenu,
    addition,
    subtraction
  }
}
</script>

<style>
#app {

}
</style>
