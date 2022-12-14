const router = require("express").Router();
const { json } = require("express");
let Employee = require("../models/empModel");

//create a new user
router.route("/add").post( (req,res) => {

    console.log("pid : ", req.body.pid);

    const pid = req.body.pid;
    const name = req.body.name;
    const gender = req.body.gender;
    const age = req.body.age;
    const height = req.body.height;
    const weight = req.body.weight;
    const address = req.body.address;
    const phone = req.body.phone;

    const newEmployee = new Employee({
        pid,
        name,
        gender,
        age,
        height,
        weight,
        address,
        phone
    })

    //"then" use as a promiss function
    newEmployee.save().then( () => {
        res.json("new employee added successfully..");
    }).catch((err)=>{
        console.log(err);
    })

});

//read all user
router.route("/").get( (req,res) =>{

    Employee.find().then((employees)=>{
        res.json(employees)
    }).catch((err)=>{
        console.log(err);
    })

});

//find one user
router.route("/:keyword").get(async(req,res)=>{

    console.log("keyword : ", req.params.keyword);

    const user = await Employee.findOne({name : req.params.keyword}).then((employee)=>{
        res.status(200).send({staus:"Single Patient fetched..", user: employee});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"error in Patient fetching..", error: err.message});
    })

});

//using async can do multiple task at the same without any crash
//Update fuction
router.route("/update/:id").put( async (req,res)=>{

    let userId = req.params.id;

    console.log("user id : ", userId);

    //D structure
    const {pid, name, gender, age, height, weight, address, phone} = req.body;

    const updateEmployee = {
        pid,
        name,
        gender,
        age,
        height,
        weight,
        address,
        phone,
    }

    const update = await Employee.findByIdAndUpdate(userId, updateEmployee).then(()=>{
        res.status(200).send({status: "Employer updated.."});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"error in update Employer", error: err.message});
    })

});

//delete fuction
router.route("/delete/:id").delete(async(req,res)=>{

    let userId = req.params.id;

    await Employee.findByIdAndDelete(userId).then(()=>{
        res.status(200).send({status:"Employer deleted.."});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"error in Employer deleting..", error: err.message});
    })

});


module.exports = router;
