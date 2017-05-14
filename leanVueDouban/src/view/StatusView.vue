<template>
	<div class="status has-header">
		<Banner></Banner>
		<div class="content-list">
			<Card mold="quote" v-for="item in items" :key="item"></Card>
			<a class="list-link" href="#">显示更多广播</a>
	    </div>
	    <DownloadApp></DownloadApp>
	</div>
</template>

<script>
import Banner from '@/components/Banner'
import Card from '@/components/Card'
import DownloadApp from '@/components/DownloadApp'
export default{
	data(){
		return{
			items: new Array(10)
		}
	},
	components:{
		Banner,
		Card,
		DownloadApp
	}
}
</script>

<style lang="scss" scoped>
.list-link {
  display: block;
  padding: 1.5rem 0;
  font-size: 1.6rem;
  line-height: 1.8rem;
  text-align: center;
  color: #42bd56;
}
.content-list{
	margin-top: 100px;
}
</style>
