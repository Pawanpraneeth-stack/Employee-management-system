import "./EmployeeList.css";

function EmployeeList() {
  return (
    <div className="employee-list">

      <div className="table-header">
        <h2>Employee Directory</h2>
        <input
          type="text"
          placeholder=" Search Employee..."
          className="search-box"
        />
      </div>

      <table>

        <thead>
          <tr>
            <th>Employee ID</th>
            <th>Name</th>
            <th>Department</th>
            <th>Designation</th>
            <th>Email</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>

          <tr>
            <td>E1</td>
            <td>Jenisha</td>
            <td>HR</td>
            <td>HR Manager</td>
            <td>jenisha@gmail.com</td>
            <td><span className="status active">Active</span></td>
            <td>
              <button className="edit-btn">Edit</button>
              <button className="delete-btn">Delete</button>
            </td>
          </tr>

          <tr>
            <td>E2</td>
            <td>Praneeth</td>
            <td>IT</td>
            <td>Software Engineer</td>
            <td>praneeth@gmail.com</td>
            <td><span className="status active">Active</span></td>
            <td>
              <button className="edit-btn">Edit</button>
              <button className="delete-btn">Delete</button>
            </td>
          </tr>

          <tr>
            <td>E3</td>
            <td>Yaazhan</td>
            <td>IT</td>
            <td>Developer</td>
            <td>yaazhan@gmail.com</td>
            <td><span className="status active">Active</span></td>
            <td>
              <button className="edit-btn">Edit</button>
              <button className="delete-btn">Delete</button>
            </td>
          </tr>

        </tbody>

      </table>

    </div>
  );
}

export default EmployeeList;