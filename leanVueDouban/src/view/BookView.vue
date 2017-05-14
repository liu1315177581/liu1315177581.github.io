<template>
	<div class="movie-view has-header">
		<Scroller title="受关注图书｜虚构类" type="hasCover" :items="novel"></Scroller>
		<Scroller title="最受关注图书｜非虚构类" type="hasCover" :items="reality"></Scroller>
		<Scroller title="豆瓣纸书" type="hasCover" :items="travel"></Scroller>
		<Scroller title="发现好书" type="onlyString" :items="bookTags"></Scroller>
		<DownloadApp></DownloadApp>
	</div>
</template>

<script>
import { mapState } from 'vuex'
import Scroller from '@/components/Scroller'
import Types from '@/components/Types'
import DownloadApp from '@/components/DownloadApp'
export default{
	created(){
		this.getBook();
	},
	data(){
		return{}
	},
	methods:{
		getBook:function(){
			this.$store.dispatch('getBook')
		}
	},
	computed:{
		...mapState({
			novel:state=>state.book.novel,
			reality: state => state.book.reality,
			travel: state => state.book.travel,
			bookTags: state => state.book.bookTags
		})
	},
	components:{
		Scroller,
		Types,
		DownloadApp
	}
}
</script>

<style>
	
</style>