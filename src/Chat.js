// import React, {useState, useEffect, useRef,forwardRef,useImperativeHandle} from 'react';
import { Link } from 'react-router-dom';

import CateBtn from './CateBtn';

// let getChat  = ({work, talker, option}) => {
//     let chat = Chat({work, talker, option});
    
//     //document.querySelector('.content').append(chat);
// }

let Chat  = ({work, talker, option}) => {
    if (talker === 'user') {
        return (
            <div className="chat user">
                <p>testtt</p>
            </div>
        )
    } else {
        switch(work){
            case 'recommend':
                return (
                    <div className="chat">
                        <p>오늘은 이거 어때?</p>
                        <div className="photo">
                            <p>음식</p>
                            <Link className="btn" to={'default'}>다시 고르기</Link>
                        </div>
                        <Link className="btn" to={'again'}>다시 고르기</Link>
                    </div>
                )
            case 'other':
                return (
                    <div className="chat">
                        <p>다른 메뉴로는 이런 게 있어</p>
                        
                    </div>
                )
            default:
                return (
                    <div className="chat">
                        <p>뭘 먹으면 좋을까?</p>
                        <div className="cate btns">
                            <CateBtn></CateBtn>
                        </div>
                    </div>
                )
        }
    }
}

export default Chat;