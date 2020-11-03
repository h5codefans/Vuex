<template>
	<div class="item" :class="{active:isActive }" @click="$emit('active')">
		<slot></slot>
	</div>
</template>
<script>
	export default{
		props:{
			isActive:{
				type:Boolean,
				// required:true,
				default:false
			}
		}
	}
</script>
<style scoped>
.item{
	width:100%;
	height: 100%;
	cursor: pointer;
	transition: 0.2s;
}
.active{
	background: #e7e7e7;
}
.item:hover{
	background: #f4f4f4;
}
</style>