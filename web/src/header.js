import React from 'react';

class Header extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const logo = <div><a>makespace.</a></div>;
        const filterButton = <div className={'filterButton'}><span>•</span><span>•</span><span>•</span></div>;
        const menuButton = <div className={'menuButton'}><span></span><span></span></div>
        const buttons = <div className={'buttons'}><button>{filterButton}</button><button>{menuButton}</button></div>;
        const div = <div className={'header'}><header>{logo}{buttons}</header></div>;
        return(div);
    }
}

export default Header;