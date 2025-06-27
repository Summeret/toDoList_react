import './assets/styles/reset.css'; /* 공통파일이므로 App.jsx에 연결해도 됨 */
import './assets/styles/header.css';

function Header(){
    return (
        <header>
            <h1>To Do List</h1>
        </header>
    )
}

export default Header;