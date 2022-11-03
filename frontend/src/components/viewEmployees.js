import React, {useState, useEffect, useDebugValue} from "react";
import axios from "axios";
import { Button, Dropdown, Menu } from "antd";
import {
    EditOutlined,
    CaretDownFilled,
    DeleteOutlined,
    ExclamationCircleOutlined,
  } from "@ant-design/icons";
import DataTable from "./common/DataTable";

import EditPatientDialog from "./EditPatientDialog";
import DeletePatient from "./DeletePatient";


function ViewEmployer(){

    const[employees, setEmployees] = useState([]);
    const [tableLoading, setTableLoading] = useState(false);

    const [editDialog, setEditDialog] = useState(() => ({ open: false }));
    const [deleteDialog, setDeleteDialog] = useState(() => ({ open: false }));

    useEffect(()=>{
        getEmployees();
    }, [])

    function getEmployees(){
      setTableLoading(true);
      axios.get("http://localhost:3005/employee/").then((res)=>{
          setEmployees(res.data);
          setTableLoading(false);
          console.log("data :", res.data);
      }).catch((err)=>{
          alert(err.message);
      })
    }


    const columns = [
        {
          title: "Patient ID",
          dataIndex: "pid",
          key: "pid",
        },
        {
          title: "Name",
          dataIndex: "name",
          key: "name",
        },
        {
          title: "Gender",
          dataIndex: "gender",
          key: "gender",
        },
        {
          title: "Age",
          dataIndex: "age",
          key: "age",
        },
        {
          title: "Height(cm)",
          dataIndex: "height",
          key: "height",
        },
        {
          title: "Weight(kg)",
          dataIndex: "weight",
          key: "weight",
        },
        {
          title: "Address",
          dataIndex: "address",
          key: "address",
        },
        {
          title: "Contact No",
          dataIndex: "phone",
          key: "phone",
        },
        {
          title: "Action",
          key: "id",
          width: 10,
          render: (record) => (
            <>
              <Dropdown
                overlay={
                  <Menu
                    selectable
                    defaultSelectedKeys={["1"]}
                    items={[
                      {
                        key: "Edit",
                        name: "Edit",
                        onClick: () => {
                        setEditDialog({ open: true, record: record });
                        //   setName(record.name);
                        //   setSerialNo(record.serial_no);
                        //   // console.log("evidence : ", record.serial_no);
                        },
                        icon: <EditOutlined />,
                        label: "Edit",
                      },
                      {
                        key: "Delete",
                        name: "Delete",
                        title: "Delete",
                        onClick: () => {
                          console.log("delete dialog");
                          setDeleteDialog({ open: true, record: record });
                        },
                        icon: <DeleteOutlined />,
                        label: "Delete",
                      },
                    ]}
                  />
                }
              >
                <Button
                  title="Actions"
                >
                  Action <CaretDownFilled />
                </Button>
              </Dropdown>
            </>
          ),
        },
      ];


    return(
            <div><br></br><br></br>

            <h3 style={{textAlign:"start", marginLeft:"85px"}}>Patients List</h3>

            <div style={{ marginLeft:"80px", marginRight:"80px", border:"1px solid #B8E8FC", borderRadius:"10px", marginTop:"40px" }} >

                <DataTable
                loading={tableLoading}
                columns={columns}
                data={employees}
                />

            </div>

            {/* <table class="table">
                <thead class="table-dark">
                    <tr>
                    <th scope="col">Employee ID</th>
                    <th scope="col">Employee Name</th>
                    <th scope="col">Employee Possition</th>
                    <th scope="col">Gender</th>
                    <th scope="col">Actions</th>
                    </tr>
                </thead>
                    <td><input id="one" type="text" style={{margin:"5px"}}></input></td>
                    <td><input id="two" type="text" style={{margin:"5px"}}></input></td>
                    <td><input id="three" type="text" style={{margin:"5px"}}></input></td>
                    <td><input id="four" type="text" style={{margin:"5px"}}></input></td>
                    <td> <button class="btn btn-info" style={{width:"90px", margin:"2px"}} size="sm" variant="primary" onClick={()=>{
                        

                        let name = document.getElementById("two").value;
                        let possition = document.getElementById("three").value.toString();
                        let gender = document.getElementById("four").value;
                        let id = document.getElementById("one").value;

                        const updateEmployee = {
                            name,
                            possition,
                            gender
                        }

                        axios.post("http://localhost:8070/employee/update/"+ {id}, updateEmployee).then(()=>{
                            alert("Updated..");

                        }).catch((err) => {
                            alert(err.message)
                        })

                    }}>Save</button></td>

                {employees.map((employee,index)=>(

                <tbody key={index}>
                    <tr>
                        <th scope="row">{index+1}</th>
                        <td>{employee.name}</td>
                        <td>{employee.possition}</td>
                        <td>{employee.gender}</td>
                        <td> 
                            <button class="btn btn-warning" size="sm" variant="primary" 
                            onClick={()=>{
                                document.getElementById("two").value = employee.name;
                                document.getElementById("three").value = employee.possition;
                                document.getElementById("four").value = employee.gender;
                                document.getElementById("one").value = index+1;
                            }}
                            >
                                Edit
                            </button> 
                            | 
                            <button class="btn btn-danger" size="sm" variant="primary" 
                            onClick={()=>{
                                const sid = employee._id;
                                console.log("ID paased : ", sid);

                                axios.delete(`http://localhost:3005/employee/delete/${sid}`).then(()=>{
                                alert("Deleted..");

                                }).catch((err) => {
                                alert(err.message)
                                })

                            }}
                            >
                                Delete
                            </button> 
                        </td>
                    </tr>
                </tbody>
                
                )
                )}

                </table> */}

          {editDialog.open && <EditPatientDialog refetch={ ()=> getEmployees() } record={editDialog.record} open={editDialog.open} onClose={() => setEditDialog({ open: false })} />}
          {deleteDialog.open && <DeletePatient refetch={ ()=> getEmployees() } record={deleteDialog.record} open={deleteDialog.open} onClose={() => setDeleteDialog({ open: false })} />}

        </div>
    );

}

export default ViewEmployer;