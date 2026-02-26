function TodoItem1() {

  let todoName = "Milk Buy";
  let todoDate = "2024-06-30";



  return (
    <div class="items-container">
      <div class="row">
        <div class="col-4">{todoName}</div>
        <div class="col-4">{todoDate}</div>
        <div class="col-2">
          <button class="btn btn-danger kg-button">Delete</button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem1;
