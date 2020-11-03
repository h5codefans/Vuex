<template>
	<div>
		<!-- <p>当前最新count值为：{{count}}</p> -->
		<h3>{{showNum}}</h3>
		<button @click="btnHandler1">-1</button>
		<button @click="btnHandler2">-N</button>
		<button @click="btnHandler3">-1</button>
		<button @click="subNAsync(5)">-N</button>
	</div>
</template>
<script>
	import {mapState,mapMutations,mapActions,mapGetters} from 'vuex'
	export default{
		data(){
			return {}
		},
		computed:{
			...mapState(['count']),
			...mapGetters(['showNum'])
		},
		methods:{
			...mapMutations(['sub','subN']),
			...mapActions(['subAsync','subNAsync']),
			btnHandler1(){
				this.sub();
			},
			btnHandler2(){
				this.subN(3);
			},
			btnHandler3(){
				this.subAsync();
			}
			// btnHandler4(){
			// 	this.subNAsync(5);
			// }
		}
	}
</script>
<style scoped>
	
</style>