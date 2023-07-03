import { CompleteIcon } from '../TodoIcon/CompleteIcon';
import { DeleteIcon } from '../TodoIcon/DeleteIcon';
import './TodoItem.css'

function TodoItem({ text, completed, onComplete, onDelete}) {
    return (
        <li className="TodoItem">
            {/* <span 
                className={`Icon Icon-check ${completed && "Icon-check--active"}`}
                onClick={onComplete}
            >
                V
            </span> */}
            <CompleteIcon 
                completed={completed}
                onComplete={onComplete}
            />
            <p className={`TodoItem-p ${completed && 'TodoItem-p--completed'}`}>
                {text}
            </p>
            <DeleteIcon onDelete={onDelete} />
            {/* <span
                className={`Icon Icon-delete`}
                onClick={onDelete}
            >
                X
            </span> */}
        </li>
    );
}

export { TodoItem };