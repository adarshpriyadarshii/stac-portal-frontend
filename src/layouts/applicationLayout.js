import React, { useState } from 'react'
import './style.css'
import illustration from '../assets/application/illustration.svg'
import next from '../assets/application/next.svg'
import { NavLink } from "react-router-dom";
import ApplicationForm from '../layouts/forms/applicationForm';
import DocUpload from '../layouts/forms/documentUpload';
import FinalSubmit from '../layouts/forms/finalSubmit';

const ApplicationLayout = () => {
    const [tab,setTab] = useState(0);
    const isAuth = true;
    return (
        <>
        <div className="wl_sp_lp_main2">
            <div className="wl_sp_lp_lft wl_sp_lp_lft2">
                <h4>Application Form</h4>
                <p>
                    Lorem ipsum dolor sit amet. In minus internos quo voluptatem temporibus ex dolore dolore qui laborum doloremque. Qui voluptate quidem et dolorum voluptate cum obcaecati sapiente qui placeat fuga.
                </p>
                <p>
                    Aut omnis excepturi eos laborum laudantium eos unde voluptas aut laudantium consequatur. Ut illum adipisci qui blanditiis voluptate sed consequatur inventoreet quia quia. In odio ducimus vel ullam quae cumque natus.
                </p>
            </div>
            <div className="wl_sp_lp_rgt2">
                <img src={illustration} alt="" />
            </div>
        </div>
        <div className="wl_sp_lp_main_form_progress">
            <button className={tab===0?"wl_sp_lp_main_form_btn_filled":"wl_sp_lp_main_form_btn"} onClick={()=>setTab(0)}>Application Form</button>
            <div className="wl_sp_lp_main_form_line_svg">
                <div className="wl_sp_lp_main_form_line"></div>
                <img src={next} alt="" />
            </div>
            <button className={tab===1?"wl_sp_lp_main_form_btn_filled":"wl_sp_lp_main_form_btn"} onClick={()=>setTab(1)}>Upload Documents</button>
            <div className="wl_sp_lp_main_form_line_svg">
                <div className="wl_sp_lp_main_form_line"></div>
                <img src={next} alt="" />
            </div>
            <button className={tab===2?"wl_sp_lp_main_form_btn_filled":"wl_sp_lp_main_form_btn"} onClick={()=>setTab(2)}>Submit</button>
        </div>
        {tab===0?<ApplicationForm/>:null}
        {tab===1?<DocUpload/>:null}
        {tab===2?<FinalSubmit/>:null}
        </>
    )
}

export default ApplicationLayout
