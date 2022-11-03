import React from 'react'
import axios from 'axios';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import { Button, Form, Input, message } from 'antd';
import {
    ExclamationCircleOutlined,
  } from "@ant-design/icons";

import ButtonM from '@mui/material/Button';
import { DialogActions } from '@mui/material';


const success = () => {
    message.success('Succefully Deleted..');
};

const error = () => {
    message.error('Error in Delete Patient');
};

function DeletePatient({open, onClose, record, refetch}) {

    console.log("recoed : ", record);

    function deletePatient() {

        const id = record._id;

        axios.delete(`http://localhost:3005/employee/delete/${id}`).then((res)=>{
            console.log("delete");
            success();
            refetch();
            onClose()
        }).catch((err)=>{
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
            style={{marginTop:"-300px"}}
            >

                <div style={{paddingTop:"10px", paddingBottom:"0px", width:"430px", paddingLeft:"10px", paddingRight:"10px", display:"flex", flexDirection:"column"}} className="py-6 md:w-[430px] w-[350px] px-5 md:px-0">

                    <div style={{display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"center"}}>
                        <ExclamationCircleOutlined style={{fontSize:"20px", color:"red", marginTop:"-20px"}} />
                        <p style={{marginLeft:"10px", fontSize:"22px", fontWeight:"500"}}>Alert</p>
                    </div>

                    <p style={{fontSize:"17px", alignSelf:"center", marginBottom:"40px", fontWeight:"400"}}>Are sure you want to delete this patient?</p>

                    <DialogActions>

                        <ButtonM onClick={onClose} autoFocus >
                            Cancel
                        </ButtonM>
                        <ButtonM style={{color:"red"}} type='submit' onClick={deletePatient}  autoFocus>
                            Delete
                        </ButtonM>

                    </DialogActions>

                </div>

            </Dialog>

        }

    </>

  )

}

export default DeletePatient