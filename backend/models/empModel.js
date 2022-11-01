const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const treatmentInfo = new Schema({

    physician : {
        type : String,
    },
    physical_examination : {
        type : String,
    },
    treatment : {
        type : String,
    },
    diagnosis : {
        type : String,
    },
    history : {
        type : String,
    },
    blood_pressure : {
        type : Number,
    },
    temperature : {
        type : Number,
    },
    pulse_rate : {
        type : Number,
    },
    capillary_refill : {
        type : Number,
    },
    repiratory_rate : {
        type : Number,
    },
    
})

//like object declaration
const employeeSchema = new Schema({

    //like attribute declaration

    pid : {
        type : String,
        required : true,
    },
    name : {
        type : String,
        required : true //backend Validation for variable "name"
    },
    gender : {
        type : String,
        required : true
    },
    age : {
        type : Number,
        required : true
    },
    height : {
        type : Number,
        required : false
    },
    weight : {
        type : Number,
        required : false
    },
    address : {
        type : String,
        required : true
    },
    phone : {
        type : Number,
        required : true
    },
    patient_details : {
        type : treatmentInfo,
        required : false
    },

})

const Employee = mongoose.model("Employee", employeeSchema);

module.exports = Employee;