import mongoose from 'mongoose'
const connectDB  = async ()=>{
    console.log(process.env.DB_Online);
    return await mongoose.connect(process.env.DB_Online)
    .then(res=>console.log(`DB Connected successfully on .........`))
    .catch(err=>console.log(` Fail to connect  DB.........${err} `))
}


export default connectDB;