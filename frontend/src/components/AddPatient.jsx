import React from 'react'
import { Button, Form, Input, InputNumber } from 'antd';
import axios from "axios";


function AddPatient() {

    const [form] = Form.useForm();


    const SavaPatient = (val) => {

        console.log("data : ", val);

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

        axios.post("http://localhost:3005/employee/add", data).then(()=>{

            console.log("add user");
            form.resetFields();
            alert("Successfully added..");

        }).catch((err) => {
            alert(err.message)
        })

    }


  return (

    <div style={{display:"flex", flexDirection:"column"}}>

    <p style={{fontSize:"30px", alignSelf:"center", marginTop:"10px", fontWeight:"500"}} >Add Patient</p>

    <div style={{display:"flex", alignItems:"center", justifyContent:"center", marginLeft:"200px", marginRight:"200px", border:"1px solid #B8E8FC", borderRadius:"10px", marginTop:"-20px", height:"full", width:"full"}}>

        <div className='flex flex-col' style={{width:"500px", marginTop:"40px"}}>


        <Form
            requiredMark={"optional"}
            form={form}
            layout="vertical"
            className="bg-white pl-5 pr-5 md:pl-12 md:pr-12 pt-10 border-0"
            onFinish={SavaPatient}
            style={{ border: "1px solid #D7EAFB", width:"full" }}
        >

            <Form.Item
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

                    <Button htmlType="submit" type='primary'>Save</Button>

            </Form.Item>


        </Form>

        </div>

    </div>

    </div>

  )

}

export default AddPatient