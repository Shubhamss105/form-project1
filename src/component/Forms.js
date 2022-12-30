import React, { useState } from "react";

function Forms() {
  const [list, setList] = useState({ name: "", email: "", phoneNo: "" });
  const [submittedData, setSubmittedData] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmittedData([...submittedData, list]);
    setList({ name: "", email: "", phoneNo: "" });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setList({ ...list, [name]: value });
  };

  const handleDelete = (index) => {
    setSubmittedData(submittedData.filter((_, i) => i !== index));
  };

  return (
    <>
      <div class="row g-2  mb-3 mx-3 my-3">
        <div class="col ">
          <div className="container mb-3 mx-3 my-3">
            <h1 >Form</h1>
            <form onSubmit={handleSubmit}>
              <label className="form-label">
                Name:
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="name"
                  value={list.name}
                  onChange={handleChange}
                />
              
              <br />
              <label className="form-label">
                Email:
                </label>
                <input
                  className="form-control"
                  type="email"
                  name="email"
                  value={list.email}
                  onChange={handleChange}
                />
              
              <br />
              <label className="form-label">
                Phone No:
                </label>
                <input
                  className="form-control"
                  type="number"
                  name="phoneNo"
                  value={list.phoneNo}
                  onChange={handleChange}
                />
              
              <br />
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
            {/* table data */}
        <div class="col mb-3 mx-1 my-3 ">
        <div className="container-lg">
          <table className="table table-bordered table-hover">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              {submittedData.map((data, index) => (
                <tr key={index}>
                    <td>{index+1}</td>
                  <td>{data.name}</td>
                  <td>{data.email}</td>
                  <td>{data.phoneNo}</td>
                  <td>
                    <button type="button" className="btn btn-danger" onClick={() => handleDelete(index)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Forms;
