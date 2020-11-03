<template>
<div class="item-menu">
    <item :isActive="isActive" @active="$emit('active')">
      <div class="left inner">
        <slot name="title"></slot>
      </div>
      <div class="right inner">
        <slot name="icon"></slot>
      </div>
    </item>
 </div>
</template>

<script>
  import Item from "@/components/item"
export default {
    props:{
      isActive:{
        type:Boolean,
        // required:true,
        default:false
      }
    },
  components:{
    Item,
  }
}
</script>

<style scoped>
.item-menu{
  height: 46px;
  line-height: 46px;
  width: 100%;
  font-size: 16px;
}
.inner{
  padding: 0 20px;
}
.left{
  float: left;
  color: #212121;
  font-weight: 500;

}
.right{
  float: right;
  font-size: 12px;
  color: #999;
}
</style>
