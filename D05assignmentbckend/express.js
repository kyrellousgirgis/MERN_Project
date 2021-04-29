const express = require("express");
const  User = require("./Models/User");
const cors = require ("cors");
const app = express();
const path = require('path');
const upload = require("./MulterConf");
const bodyparser = require('body-parser')

const initMongoose = require("./initMongoose")
initMongoose().then(()=>{
    app.listen(3000,()=>{
    console.log('started listening on port 3000');
    })
}).catch((err)=>{console.log(err)})


const body_parser = bodyparser.urlencoded({extended:false});
app.use(express.json());
app.use(cors())
app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin","*")
    res.header("Access-Control-Allow-Headers"
    ,"Origin,X-Requested-With,Content-Type,Accept")
    next();
});

app.use(express.static(path.join(__dirname, 'assets/imgs/')));

app.get("/getAllUsers",(req,res,next)=>{
    // res.send(User.find({}))
    User.find({},(err,data)=>{
        res.send(data)
    })
})

app.get("/getAllUsers/:name",(req,res,next)=>{
    if(req.params.name)
    User.find({name:{ "$regex": req.params.name, "$options": "i" }},(err,data)=>{
     res.send(data);   
  })
  else
    res.redirect("http://localhost:3000/getAllUsers")          
})

app.get("/SearchById/:id",(req,res,next)=>{
    
    User.findOne({_id:req.params.id}).then((data)=>{
        res.send(data);
    })
})
app.delete("/deleteUser/:id",(req,res)=>{
    console.log(req?.params?.id)

    User.deleteOne({_id : req?.params?.id}).then((data)=>{
        console.log("user deleted")
        res.send("User Deleted Successfully");
    }).catch((err)=>{
        console.log("not Deleted")
        res.send("User is not found");
    })
});


app.post("/addUser",body_parser,upload.single("img"),(req,res,next)=>{
    console.log(req.body);
    console.log(req.file);
    const { name, number, email} = req.body;
    var user = new User({ name, number, email });
    
    if(req.file){
        user.img = req.file.filename;
    }
    user.save().then(()=>{
        

        console.log("user added successfully");
        res.send(user);
    }).catch((err)=>{
        console.log(err);
        res.send(err);
    });


    app.put("/editUser/:id",(req,res)=>{
        console.log(req.params)
        console.log(req.body)
        User.findOneAndUpdate({_id:req.params.id},req.body,{new:true})
        .then((data)=>{
            console.log(success)
            res.send(data)
        }).catch(err=>{
            res.send(err);
        })
    })
    // User.create(user,(err,data)=>{
    //     if(err){
    //         res.send(err);
    //     }else{
    //         console.log(data);
    //         res.send(data)
    //     }
    // })

})

