import TodoItem from "./TodoItem";
import styles from "./Todoitems.module.css";

const TodoItems = ({todoItems}) => {

    return(<div className={styles.itemsContainer}>
        {todoItems.map(items =>  <TodoItem todoName={items.name} todoDate={items.dueDate} key={items.name}></TodoItem>)}

      </div>);

};

export default TodoItems;