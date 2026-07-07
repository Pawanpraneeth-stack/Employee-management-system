import "./AddEmployee.css";

function AddEmployee() {
  return (
    <div className="add-employee">

      <h2>Add New Employee</h2>

      <form className="employee-form">

        <div className="form-group">
          <label>Employee ID</label>
          <input type="text" placeholder="Enter Employee ID" />
        </div>

        <div className="form-group">
          <label>Full Name</label>
          <input type="text" placeholder="Enter Full Name" />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input type="email" placeholder="Enter Email Address" />
        </div>

        <div className="form-group">
          <label>Phone Number</label>
          <input type="tel" placeholder="Enter Phone Number" />
        </div>

        <div className="form-group">
          <label>Department</label>
          <select>
            
            <option>Full stack Developer</option>
            <option>Senior Developer</option>
            <option>Associate Engineer</option>
            <option>Technical Assist</option>
            <option>Customer Support</option>
    
          </select>
        </div>

        <div className="form-group">
          <label>Designation</label>
          <input type="text" placeholder="Enter Designation" />
        </div>

        <div className="form-group">
          <label>Salary</label>
          <input type="text" placeholder="Enter Salary" inputMode="numeric"/>
        </div>

        <button type="submit" className="add-btn">
          Add Employee
        </button>

      </form>

    </div>
  );
}

export default AddEmployee;