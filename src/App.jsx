import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; //폰트어썸 사용 설정 기본연결
/* 개별 폰트어썸 불러오기 */
//import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import * as brands from '@fortawesome/free-brands-svg-icons' //class이름처럼 별칭으로 사용하겠다 선언
//import { faAngleLeft, faAngleRight, faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons'
import * as arrow from '@fortawesome/free-solid-svg-icons'
//컴포넌트 호출
import Header from './Header';
import Todo from './Todo';
import List from './List'


function App (){
  return (
    <div id="wrap" style={{
        /* jsx 스타일 작성방법 => 중괄호 두번:css 인식 (중괄호 한번:함수) */
        backgroundColor:'#eee',
        width:'420px',
        height:'80vh',
        margin:'0 auto',
        padding:'30px 15px',
      }}>
      <Header /> {/* 태그가 아닌 컴포넌트 호출 */}
      <Todo />
      <ul>
        <List />
        <List />
        <List />
        <List />
        <List />
        <List />
      </ul>
    </div>
  )
}

export default App