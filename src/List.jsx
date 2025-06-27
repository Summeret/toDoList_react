import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import './assets/styles/reset.css';
import './assets/styles/List.css';


function List(){  {/* 반복호출이 가능하니까 하나만 제대로 만들어놓고 필요한 위치에 호출 */}
    return(
        <li>
            <input type="checkbox" name="list" />
            <span>방 청소하기</span>
            <button type="button">
            <FontAwesomeIcon icon={faEllipsisVertical} />
            </button>
        </li>
    )
}

export default List;