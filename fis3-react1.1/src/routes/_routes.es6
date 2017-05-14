/**
 * @module _routes
 * @author 小虎牙
 */
import React,{ Component } from 'react'
import { Route } from 'react-router-dom'
import { Home, Counter, Div, Taobao } from '/src/containers'

export default class extends Component{
	render(){
		return(
			<div>
				<Route path="/" exact component={Home}></Route>
				<Route path="/dome1"  component={Counter}></Route>
				<Route path="/dome2"  component={Div}></Route>
				<Route path="/dome3"  component={Taobao}></Route>
				<Route path="/dome4"  component={Home}></Route>
			</div>
		)
	}
}