import { ReactComponent as DeleteSvg } from './delete.svg';
import { ReactComponent as CheckSvg } from './check.svg';
import './TodoIcon.css';

const iconTypes = {
    "delete": (color) => <DeleteSvg className='Icon-svg' fill={color}/>,
    "check": (color) => <CheckSvg className='Icon-svg' fill={color}/>,
}

function TodoIcon({type, color, onClick}){
    return (
        <span className={`Icon-container Icon-container-${type}`} onClick={onClick}>
            {iconTypes[type](color)}
        </span>
    );
}

export { TodoIcon };