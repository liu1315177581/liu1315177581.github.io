/**
 * @module counter
 * @author 小虎牙
 */
import React,{ Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Button,Progress,message } from 'antd'
import { counterActions } from '/src/actions/'

@connect(
    state=>state.counter,
    dispatch=>bindActionCreators(counterActions,dispatch)
)
export default class extends Component{
    componentDidMount(){
        this.props.updateTimeAction();
        this.props.fetchInterfaceTestActionGet(`?vui=vui`)
        this.props.fetchInterfaceTestActionPost({vui: 'vui'});
    }
    render(){
        const { props, methods } = this;
        return (
            <div className="module-wrap">
                <div>
                    <Button size="small" disabled={props.count === props.countMax} onClick={props.addAction}> 加加 </Button>&nbsp;&nbsp;
                    <Button size="small" disabled={props.count === props.countMin} onClick={props.subtractAcion}> 剪剪 </Button>&nbsp;&nbsp;
                </div>
                <br />
                <Progress type="circle" width={80} percent={props.count} />
                <br />
                <br />
            </div>
        );
    }
}