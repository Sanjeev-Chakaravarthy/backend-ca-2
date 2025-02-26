const express = require('express')
const app = express()

app.use(express.json())

app.get('/', (req,res) => {
try {
    res.status(200).send("email: admin@123.com | password: 12345678")
} catch (error) {
    return res.status(500).json({error: error.message})
}
})

app.post('/login', (req,res) => {
   try {
    const {email, password}= req.body
    if(!email){
        return res.status(404).json({error: "Email Cannot be Empty"})
    }
    if(!password){
        return res.status(404).json({error: "password Cannot be Empty"})
    }
    if (email == "admin@123.com" && password == "12345678"){
        return res.status(200).json({message :"Admin Logged In Sucessfully"})
    }
    else{
        return res.status(400).json({message: "Invalid Credentials"})
    }
   } catch (error) {
    return res.status(500).json({error: error.message})
   }
} )

app.listen(3000, ()=> console.log("Server is Running on the port http://localhost:3000"))
