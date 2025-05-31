import mongoose from "mongoose"

function DBConnection(){
    mongoose.connect(
        'mongodb+srv://anupamanand0209:VLlph6b0CoOgGBw8@cluster0.4lbyhzo.mongodb.net/'
    ).then(() => console.log("We connected to DB 😉"))
    .catch((err) => console.log(err));
}

export default DBConnection