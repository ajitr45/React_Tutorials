function AddTodo() {
  return (
    <div class="items-container">
      <div class="row kg-row">
        <div class="col-4">
          <input type="text" placeholder="Enter your Todo" />
        </div>
        <div class="col-4">
          <input type="date" />
        </div>
        <div class="col-2">
          <button class="btn btn-primary kg-button">Add Todo</button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
