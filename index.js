const express=require('express');
const app= express();
const cors= require('cors');

app.use(cors());
app.use(express.json());

const subjects=[
    {id:1,name:"Company Law",price:"3000 Taka",code:123},
    {id:2,name:"Contract Law",price:"3400 Taka",code:126},
    {id:3,name:"Sales of Goods Law",price:"2500 Taka",code:345},
    {id:4,name:"Limitation Law",price:"4000 Taka",code:345},
    {id:5,name:"Administrative Law",price:"5000 Taka",code:713}
]

app.get('/laws',(req, res)=>{
    console.log(req.query.search);
    const search=req.query.search;
    if(search){

        const seracedResult=subjects.filter(sub=>sub.name.toLocaleLowerCase().includes(search));
        res.send(seracedResult);

    }else{
        res.send(subjects);
    }

    res.send(subjects);
});

app.get('/laws/:id',(req, res)=>{

    const id=req.params.id;
    console.log(subjects[id-1]);

     res.send(subjects[id-1]);
});


app.post('/laws',(req, res)=>{
    const newUser=req.body;
    newUser.id=subjects.length+1;
    subjects.push(newUser);
     console.log("New User", newUser);
     res.json(newUser);
     
})


app.listen(5000,(req,res)=>{
    console.log("Listening from port 5000");
});