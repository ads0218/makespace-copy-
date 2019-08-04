import React from 'react';
import Item from './item.js';

class Body extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            order:1,
            pre_order_number:4,
            order_number:0,
            next_order_number:1,
            main_item: [
                {
                    key:0,
                    number: "main_left_number_detail_01",
                    turn_picture:"main_picture_turn_01",
                    kind: "Innovation\nRetail\nSpace\nBrand",
                    detail_detail: "The retail campus for\nmodern creators and\nconsumers.",
                    detail_title: "Gather at\nFactory.",
                    image: "https://d2yaqzrk61txq2.cloudfront.net/system/uploads/article/image/000/000/022/Factory-website1.jpg"
                },
                {
                    key:1,
                    number: "main_left_number_detail_02",
                    turn_picture:"main_picture_turn_02",
                    kind: "Brand\nSpace",
                    detail_detail: "Leveraging space and\nhow people move\nthrough it to design a\nunique and impactful\ncampaign.",
                    detail_title: "Moving people\n& moving the\nmark.",
                    image: "https://d2yaqzrk61txq2.cloudfront.net/system/uploads/article/image/000/000/019/ATB-Airport-Space-8.jpg"
                },
                {
                    key:2,
                    number: "main_left_number_detail_03",
                    turn_picture:"main_picture_turn_03",
                    kind: "Brand",
                    detail_detail: "How smaller brands can\nuse packaging to tell\ntheir brand story and\ncapture market share.",
                    detail_title: "The medium is\nthe message.",
                    image: "https://d2yaqzrk61txq2.cloudfront.net/system/uploads/article/image/000/000/001/ACE-packaging.jpeg"
                },
                {
                    key:3,
                    number: "main_left_number_detail_04",
                    turn_picture:"main_picture_turn_04",
                    kind: "Space",
                    detail_detail: "Creating comprehensive\ndining experience\nthrough cohesive design.",
                    detail_title: "You eat with\nyour eyes first.",
                    image: "https://d2yaqzrk61txq2.cloudfront.net/system/uploads/article/image/000/000/004/4_Tokiwa1-resturant-min.jpg"
                },
                {
                    key:4,
                    number: "main_left_number_detail_05",
                    turn_picture:"main_picture_turn_05",
                    kind: "Space",
                    detail_detail: "How we captured ATB's\nbrand story through\nphysical space design.",
                    detail_title: "Transactions\nto interactions\nwith ATB.",
                    image: "https://d2yaqzrk61txq2.cloudfront.net/system/uploads/article/image/000/000/009/ATB8Avenue1-spaces.jpg"
                }
            ]

        }
    }
    changeContent=()=> {
        let oN = this.state.order_number;
        let nN = this.state.next_order_number;
        let pN = this.state.pre_order_number;
        let o = this.state.order;
        o++;
        if (oN === 3) {
            pN = 3;
            nN = 0;
            oN = 4;
        } else if (oN === 4) {
            pN = 4
            nN = 1;
            oN = 0;
        } else if (oN === 0) {
            pN = 0;
            nN = 2;
            oN = 1;
        } else {
            pN++;
            oN++;
            nN++;
        }
        this.setState({order: o, pre_order_number: pN, order_number: oN, next_order_number: nN});
        const idList=["main_detail_detail_pre","main_detail_title_pre","fillBar"];
        const elList=idList.map(id=>document.getElementById(id));
        const animationList=["gonePre","gonePre","changeBar"];
        const appearList = document.getElementsByClassName("appear");
        for (let i=0;i<elList.length;i++){
            elList[i].classList.remove(animationList[i]);
            void elList[i].offsetWidth;
            elList[i].classList.add(animationList[i]);
        };
        for (let i=0;i<appearList.length;i++){
            appearList[i].classList.remove("appearNow");
            void appearList[i].offsetWidth;
            appearList[i].classList.add("appearNow");
        }
    };
    clickChange(){
        clearInterval(this.int);
        this.changeContent();
        this.int=setInterval(this.changeContent,4000);
    }
    componentDidMount() {

        this.int=setInterval(this.changeContent,4000);
    }

    lineChange(s,c){
        return(s.split("\n").map(v=>{return(<span><span className={c}>{v}<br/></span></span>)}))
    }

    render(){
        const pre_kind=this.lineChange(this.state.main_item[this.state.pre_order_number].kind);
        const pre_detail_detail=this.lineChange(this.state.main_item[this.state.pre_order_number].detail_detail);
        const pre_detail_title=this.lineChange(this.state.main_item[this.state.pre_order_number].detail_title);
        const kind=this.lineChange(this.state.main_item[this.state.order_number].kind);
        const detail_detail=this.lineChange(this.state.main_item[this.state.order_number].detail_detail,"appear");
        const detail_title=this.lineChange(this.state.main_item[this.state.order_number].detail_title,"appear");
        const prePicture=this.state.main_item[this.state.pre_order_number].image;
        const nowPicture=this.state.main_item[this.state.order_number].image;
        const nextPicture=this.state.main_item[this.state.next_order_number].image;
        const turnPictureSt=()=>{
            let p = -100*this.state.order;
            p=p+"%";
            return {
                width:"100%",
                height:"100%",
                position:"absolute",
                transitionDuration:"1s",
                left:p
            }
        };
        const prePicturePosition=()=>{
            let p = 100*(this.state.order-1);
            p=p+"%";
            return{
                display:"inline-block",
                width:"100%",
                height: "100%",
                overflow: "hidden",
                position:"absolute",
                left:p
            }
        };
        const nowPicturePosition=()=>{
            let p = 100*this.state.order;
            p=p+"%";
            return{
                display:"inline-block",
                width:"100%",
                height: "100%",
                overflow: "hidden",
                position:"absolute",
                left:p
            }
        };
        const left = <div className={'main_left'}><div className={'main_left_number'}>
            <div className={'main_left_number_wrap'}><div className={"main_left_number_wrap_wrap"}><div className={this.state.main_item[this.state.order_number].number}>01<br/>02<br/>03<br/>04<br/>05</div></div>
                <span><span> / </span><span>05</span></span></div></div><div className={'main_left_kind'}>{kind}</div></div>;
        const picture = <div className={'main_picture'}><div style={turnPictureSt()}>
            <div style={prePicturePosition()}><picture><img src={prePicture}/>
                <source srcSet={prePicture}/></picture></div>
            <div style={nowPicturePosition()}><picture><img src={nowPicture}/>
                <source srcSet={nowPicture}/></picture></div>
        </div></div>;
        const detail = <div className={'main_detail'}>
            <div className={'main_detail_detail_pre'} id={"main_detail_detail_pre"}>{pre_detail_detail}</div>
            <div className={'main_detail_detail'}>{detail_detail}</div>
            <div className={'main_detail_changeBar'} id={"changeBar"}><div className={"emptyBar"}>
                <div className={"fillBar changeBar"} id={"fillBar"}></div></div></div>
            <div className={'main_detail_title_pre'} id={"main_detail_title_pre"}>{pre_detail_title}</div>
            <div className={'main_detail_title'}>{detail_title}</div></div>;
        const right = <div className={'main_right'}>
            <div className={'main_right_nextPicture'} onClick={()=>{this.clickChange()}}>
                <div style={turnPictureSt()}>
                    <div style={prePicturePosition()}>
                        <picture><source/><img src={nowPicture}/></picture>
                    </div>
                    <div style={nowPicturePosition()}>
                        <picture><source/><img src={nextPicture}/></picture>
                    </div>
                </div>
            </div>
            <div className={'main_right_fullStory'}>Read the full<br/>story</div></div>;

        const main = <div className={'main'} id={"main"}>{left}{picture}{detail}{right}</div>;
        const items = <div className={'items'}>
            <Item id={"item_01"} kind={"Space/Brand"} detail={"Bringing Daniel Costa's vision to life through space design."} date={"2019.02.24"} img={"https://d2yaqzrk61txq2.cloudfront.net/system/uploads/article/image/000/000/025/Uccelino2-resturan-edit.jpg"}/>
            <Item id={"item_02"} kind={"Innovation/Brand/Space"} detail={"Building a strategy to nurture our brightest minds."} date={"2019.01.22"} img={"https://d2yaqzrk61txq2.cloudfront.net/system/uploads/article/image/000/000/024/24_platform-render-min.jpg"}/>
            <Item id={"item_03"} kind={"Space/Innovation"} detail={"Designing physical space for impactful experiences"} date={"2019.01.02"} img={"https://d2yaqzrk61txq2.cloudfront.net/system/uploads/article/image/000/000/023/Ignite-MakespaceSite-06.jpg"}/>
            <Item id={"item_04"} kind={"Space"} detail={"Sharing the Human focus and emotional drivers of the home."} date={"2018.12.11"} img={"https://d2yaqzrk61txq2.cloudfront.net/system/uploads/article/image/000/000/021/Strathern-House-2.jpg"}/>
            <Item id={"item_05"} kind={"Brand"} detail={"Coffee is in our blood at makespace."} date={"2018.11.29"} img={"https://d2yaqzrk61txq2.cloudfront.net/system/uploads/article/image/000/000/020/20_ACE-Brand-Coffee-3-min.jpeg"}/>
        </div>;
        const div=<div>{main}{items}</div>;

        return(div);
    }
}

export default Body;