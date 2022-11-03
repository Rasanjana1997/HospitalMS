import React from 'react'
import axios from 'axios';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import { Button, Form, Input, message } from 'antd';

import ButtonM from '@mui/material/Button';


const success = () => {
    message.success('Succefully Updated..');
};

const error = () => {
    message.error('Error in Update');
};



function EditPatientDialog({open, onClose, record, refetch}) {

    console.log("Single data : ", record._id);

    const [form] = Form.useForm();


    const UpdatePatient = (val) => {

        const id = record._id;

        console.log("data : ", id);

        const data = {
            pid : val.pid,
            name : val.name,
            gender : val.gender,
            age : val.age,
            height : val.height,
            weight : val.weight,
            address : val.address,
            phone : val.phone,
        }

        axios.put(`http://localhost:3005/employee/update/${id}` , data).then(()=>{

            console.log("updated user");
            success();
            onClose();
            form.resetFields();
            refetch();
            // alert("Successfully updated..");

        }).catch((err) => {
            console.log(err.message);
            error();
        })

    }

  return (

    <>

    { record &&

    <Dialog
    open={open}
    classes={{ paper: "rounded-xl sc2" }}
    maxWidth='lg'
    style={{marginTop:"0px"}}
    >

        <div style={{paddingTop:"10px", paddingBottom:"0px", width:"630px", paddingLeft:"10px", paddingRight:"10px", display:"flex", flexDirection:"column"}} className="py-6 md:w-[430px] w-[350px] px-5 md:px-0">

        <DialogTitle style={{alignSelf:"center", fontWeight:"550", fontSize:"25px"}} id="responsive-dialog-title">
          Edit Patient Details
        </DialogTitle>

        <DialogContent>

            <Form
                requiredMark={"optional"}
                form={form}
                layout="vertical"
                className="bg-white pl-5 pr-5 md:pl-12 md:pr-12 pt-10 border-0"
                onFinish={UpdatePatient}
                style={{ border: "1px solid #D7EAFB", width:"full" }}
            >

                <Form.Item
                    initialValue={record.pid}
                    name={"pid"}
                    label={
                        <label style={{ color: "#03488A" }}>Patient ID</label>
                    }
                    rules={[
                    {
                        required: true,
                        message : "Please input this feild !"
                    },
                    ]}
                >
                    <Input style={{width:"full"}} />
                </Form.Item>

                <Form.Item
                    initialValue={record.name}
                    name={"name"}
                    label={
                        <label style={{ color: "#03488A" }}>Name</label>
                    }
                    rules={[
                    {
                        required: true,
                        message : "Please input this feild !"
                    },
                    ]}
                >
                    <Input style={{width:"full"}} />
                </Form.Item>

                <Form.Item
                    initialValue={record.gender}
                    name={"gender"}
                    label={
                        <label style={{ color: "#03488A" }}>Gender</label>
                    }
                    rules={[
                    {
                        required: true,
                        message : "Please input this feild !"
                    },
                    ]}
                >
                    <Input style={{width:"full"}} />
                </Form.Item>

                <Form.Item
                    initialValue={record.gender}
                    name={"age"}
                    label={
                        <label style={{ color: "#03488A" }}>Age</label>
                    }
                    rules={[
                    {
                        required: true,
                        message : "Please input this feild !"
                    },
                    ]}
                >
                    <Input style={{width:"full"}} />
                </Form.Item>

                <Form.Item
                    initialValue={record.address}
                    name={"address"}
                    label={
                        <label style={{ color: "#03488A" }}>Address</label>
                    }
                    rules={[
                    {
                        required: true,
                        message : "Please input this feild !"
                    },
                    ]}
                >
                    <Input style={{width:"full"}} />
                </Form.Item>

                <Form.Item
                    initialValue={record.phone}
                    name={"phone"}
                    label={
                        <label style={{ color: "#03488A" }}>Phone</label>
                    }
                    rules={[
                    {
                        required: true,
                        message : "Please input this feild !"
                    },
                    ]}
                >
                    <Input style={{width:"full"}} />
                </Form.Item>

                <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between" }}>

                    <Form.Item
                        initialValue={record.height}
                        name={"height"}
                        label={
                            <label style={{ color: "#03488A" }}>Height</label>
                        }
                        rules={[
                        {
                            required: true,
                            message : "Please input this feild !"
                        },
                        ]}
                    >
                        <Input style={{width:"full"}} />
                    </Form.Item>

                    <Form.Item
                        initialValue={record.weight}
                        name={"weight"}
                        label={
                            <label style={{ color: "#03488A" }}>Weight</label>
                        }
                        rules={[
                        {
                            required: true,
                            message : "Please input this feild !"
                        },
                        ]}
                    >
                        <Input style={{width:"full"}} />
                    </Form.Item>

                </div>

                <Form.Item>

                    <DialogActions>

                        <ButtonM onClick={onClose} autoFocus >
                            Cancel
                        </ButtonM>
                        <ButtonM type='submit' autoFocus>
                            Save
                        </ButtonM>

                    </DialogActions>

                </Form.Item>
                
            </Form>

        </DialogContent>

        </div>

    </Dialog>

    }

    </>

  )

}

export default EditPatientDialog

