import React from "react";
export default class EmployeeList extends React.Component {
    constructor() {
        super();
        this.state = {
            empname : '',
            empage: '',
            empdesigantion : '',
            emp: [{
                name: "Smith",
                age: "20",
                designation: "Developer"
            },{
                name: "Allen",
                age: "30",
                designation: "Tester"
            },{
            name: "Martin",
            age: "40",
            designation: "Manager"}
            ]}
    }
    cname = (event) => {
        this.setState({
            empname: event.target.value,
        })
    }
    cage = (event) => {
        this.setState({
         empage: event.target.value,
        })
    }
    cdesignation = (event) => {
        this.setState({
            empdesignation: event.target.value,
        })
    }
    changeval = (event) => {
        var newObject= {
            name : this.state.empname,
            age: this.state.empage,
            designation: this.state.empdesignation
        }
        this.setState({
            emp: [...this.state.emp,newObject]
        })
    }
    delval = (id) => {
        const emp = this.state.emp.splice(id)
        this.setState({
            emp: emp})
   }
    render() {
                        return (<div>
                        <label>
                            Name: <input type="text"  onChange={this.cname}></input>
                            Age:<input type="text"  onChange={this.cage}></input>
                            Designation:<input type="text"  onChange={this.cdesignation}></input>               
                        <input type ="button" value="Click to Add Employee" onClick={this.changeval}></input>
                        </label>
                        
                        {this.state.emp.map((e,id) => { 
                                    return (<div>
                                    <b>ID:</b>{id}<br></br>
                                    <b>Name:</b>{e.name}
                                    <b>Age:</b>{e.age}
                                    <b>Designation:</b>{e.designation}
                                    <br></br><input type="button" value="Remove" onClick={() => this.delval(id)}></input>
                                    </div>)
                         } 
                        )} 
                        </div>)
}
}