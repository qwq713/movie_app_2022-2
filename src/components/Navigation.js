import React from "react";
// Link는 react-router-dom 에 속한 모듈이다.
import {Link} from 'react-router-dom';
import './Navigation.css';

function Navigation(){
    return (
        <div className="nav">
            {/* a tag와 다르게 Link 태그의 경우 페이지 전체를 다시 그리지 않음. */}
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
        </div>
    );
}


export default Navigation;
