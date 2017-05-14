<template>
	<div class="movie-view has-header">
		<Scroller title="影院热映" type="hasCover" :items="hotMovies"></Scroller>
	    <Scroller title="免费在线观影" type="hasCover" :items="topMovies"></Scroller>
	    <Scroller title="新片速递" type="hasCover" :items="newMovies"></Scroller>
	    <Scroller title="发现好电影" type="onlyString" :items="movieTags"></Scroller>
	    <Types></Types>
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
			this.getMovie();
		},
		data(){
			return{}
		},
		methods:{
			getMovie:function(){
				this.$store.dispatch('getMovie')
			}
		},
		computed:{
			...mapState({
				hotMovies:state=>state.movie.hotMovies,
				topMovies:state=>state.movie.topMovies,
				newMovies:state=>state.movie.newMovies,
				movieTags:state=>state.movieTags
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