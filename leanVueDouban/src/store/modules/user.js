import Vue from 'vue'

const state = {
	login_email:'',
	login_token:'',
	login_name:'',
	temp_email:'',
	temp_token:'',
	temp_name:''
}
const getters = {
	currentUser:state=>{
		return {
			email:state.login_email,
			token:state.login_token,
			name:state.login_name
		}
	}
}

export default{
	state,
	getters
}