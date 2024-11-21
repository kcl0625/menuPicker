import { Link } from "react-router-dom";

let CateBtn = () => {
    const cate = [
        '특식',
        '덮밥 / 볶음밥',
        '찌개',
        '국 / 탕',
        '면',
        '해장',
        '기타'
    ];
    let btn = new Array();
    
    for (let i=0;i<cate.length;i++)
        btn[i] = <Link to={'/' + cate[i]} className='btn'>{cate[i]}</Link>
        
    return btn;
}

export default CateBtn;