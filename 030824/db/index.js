import mongoose from "mongoose";

const url=`mongodb+srv://faisalali:nasir.ali@faisal.lnpo8.mongodb.net/?retryWrites=true&w=majority&appName=faisal`
mongoose.connect(url)

export default mongoose;