<template>
	<div class="detail-view has-heaer">
		<Banner title="每天看点好内容"></Banner>
		<template v-if="!showLoading">
			<div class="info">
		        <h2>
		          {{eventItem.title}}
		          <span class="badge">{{eventItem.loc_name}}</span>
		        </h2>
		        <div class="poster">
		          <img :src="eventItem.image_hlarge" alt="">
		        </div>
		        <div class="detail">
		          <span>时间:&nbsp;&nbsp;</span>
		          <ul>
		            <li>{{eventItem.begin_time}}</li>
		            <li>{{eventItem.end_time}}</li>
		          </ul>
		        </div>
		        <div class="detail">
		          <span>地点:&nbsp;&nbsp;</span>
		          <ul>
		            <li>{{eventItem.address}}</li>
		          </ul>
		        </div>
		        <div class="detail">
		          <span>费用:&nbsp;&nbsp;</span>
		          <ul>
		            <li>{{eventItem.fee_str}}</li>
		          </ul>
		        </div>
		        <div class="detail">
		          <span>类型:&nbsp;&nbsp;</span>
		          <ul>
		            <li>{{eventItem.category_name}}</li>
		          </ul>
		        </div>
		        <div class="detail">
		          <span>起始时间:&nbsp;&nbsp;</span>
		          <ul>
		            <li v-if="eventItem.owner">{{eventItem.owner.name}}</li>
		          </ul>
		        </div>
		        <tags v-if="eventItem.tags" :items="eventItem.tags | toArray"></tags>
		        <div class="describe">
		          <h2>活动详情</h2>
		          <div v-if="eventItem.content" class="content" v-html="content"></div>
		        </div>
  			</div>
  			<DownloadApp></DownloadApp>
		</template>
		<Loading v-show="showLoading"></Loading>
	</div>
</template>

<script>
import { mapState } from 'vuex'
import Banner from '@/components/Banner'
import DownloadApp from '@/components/DownloadApp'
import Loading from '@/components/Loading'
export default{
	created(){
		const id = this.$route.params.id
		this.$store.dispatch({
			type:'getSingleEvent',
			id:id
		}).then(res=>{
			this.showLoading = false
		})
	},
	data(){
		return{
			showLoading:true
		}
	},
	components:{
		Banner,
		DownloadApp,
		Loading
	},
	computed:{
		content:function(){
			return this.eventItem.content.replace(/<img.+?>/ig, '')
		},
		...mapState({
			eventItem:state=>state.activities.eventItem
		})
	}
}
</script>

<style>
	
</style>