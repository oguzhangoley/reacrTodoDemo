import React, { useState } from "react";

function NewTodoForm() {
  const [description, setDescription] = useState("bjb");
  const [assigned, setAssigned] = useState("asd");

  const descriptionChange = (event) => {
    setDescription(event.target.value);
  };
  const assignedChange = (event) => {
    setAssigned(event.target.value);
  };

  return (
    <div className="mt-5">
      <form>
        <div className="mb-3">
          <label className="form-label">Assigned</label>
          <input
            type="text"
            className="form-control"
            required
            onChange={assignedChange}
            value={assigned}
          ></input>
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            onChange={descriptionChange}
            className="form-control"
            rows={3}
            required
            value={description}
          ></textarea>
        </div>
        <button className="btn btn-primary mt-3">Add Todo</button>
      </form>
    </div>
  );
}

export default NewTodoForm;
