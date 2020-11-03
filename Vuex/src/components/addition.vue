<template>
	<div>
		<!-- <p>当前最新count值为：{{$store.state.count}}</p> -->
		<h3>{{$store.getters.showNum}}</h3>
		<button @click="btnHandler1">+1</button>
		<button @click="btnHandler2">+N</button>
		<button @click="btnHandler3">+1 Async</button>
		<button @click="btnHandler4">+N Async</button>
	</div>
</template>
<script>
	export default{
		data(){
			return {}
		},
		methods:{
			btnHandler1(){
				//不建议组件直接修改值，不合法,不利于组件维护
				//this.$store.state.count++;
				this.$store.commit('add');
			},
			btnHandler2(){
				this.$store.commit('addN',3);
			},
			//异步让count +1
			btnHandler3(){
				this.$store.dispatch('addAsync');
			},
			btnHandler4(){
				this.$store.dispatch('addNAsync',5);
			}
		}
	}
</script>
<style scoped>
	
</style>