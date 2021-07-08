import React from 'react';
import { NavLink } from 'react-router-dom';

export default function TixNav() {
    return (
        <div className='tixNav'>
            <div>TIX</div>
            <ul className="list-group ">
                <li className="list-group-item">
                    <NavLink to='/'>Thỏa thuận sử dụng</NavLink>
                </li>
                <li className="list-group-item">
                    <NavLink to='/'>Chính sách bảo mật</NavLink>
                </li>
                <li className="list-group-item">
                    <NavLink to='/'>FAQ</NavLink>
                </li>
            </ul>
        </div>
    )
}
