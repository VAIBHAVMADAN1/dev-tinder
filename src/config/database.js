const mongoose=require('mongoose');

const connectDB = async ()=> {
    await mongoose.connect("mongodb+srv://vaibhavmadan20:mGZl0J0OdjAnfset@cluster0.nujes.mongodb.net/devTinder");
}
module.exports={connectDB};
