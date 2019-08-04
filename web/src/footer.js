import React from 'react';

class Footer extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const social = <div className={'social'}><p><span>Behance</span><span>Medium</span><span>Instagram</span></p></div>;
        const email = <div className={'foot_email'}><form><input type={'text'} placeholder={'Enter email to stay up-to-date'}></input><div>Submit</div></form></div>;
        const link = <div className={'foot_link'}><div>Article</div><div>Studio</div><div>Factory</div><div>Work</div><div>Team</div><div>Archive</div><div>Careers</div></div>
        const contact = <div className={'foot_contact'}><div className={'foot_contact_ed'}><h6>Makespace Edmonton</h6><p>101,  10137 104 St NW<br/>Edmonton, Alberta,<br/>Canada, AB T5J 0Z9</p>
            <span>info@mk-spc.com</span><span>+ 1-587-813-0221</span></div>
            <div className={'foot_contact_ca'}><h6>Makespace Calgary</h6><p>28th floor, 150 9th Ave SW <br/>Calgary, Alberta,<br/>Canada, AB T2P 3H9</p>
                <span>info@mk-spc.com</span><span>+ 1-587-813-0221</span></div></div>;
        const inc = <div className={'foot_inc'}><span>© 2018 Makespace Group Inc.</span></div>;
        const foot = <div className={'foot'}>{email}{link}{contact}</div>;
        const div = <div className={'footer'}>{social}{foot}{inc}</div>;
        return(div);
    }
}

export default Footer;