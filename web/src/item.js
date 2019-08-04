import React from 'react';

class Item extends React.Component{
    constructor(props){
        super(props);
        this.state={
            kind:this.props.kind,
            detail:this.props.detail,
            date:this.props.date,
            img:this.props.img
        }
    }
    render(){
        const div = <div className={"itemWrap"}> <div className={'item'}><div className={'item_kind'}>{this.state.kind}</div><div className={'item_picture'}><img src={this.state.img}/></div>
            <div className={'item_detail'}><div className={'item_detail_detail'}>{this.state.detail}</div><div className={'item_detail_date'}>{this.state.date}</div></div></div></div>;
        return(div);
    }
}

export default Item;