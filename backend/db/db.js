const mongooose = require('mongoose')
const db = async () => {
    try{
        mongooose.set('strictQuery',false)
        await mongooose.connect(process.env.MONGO_URL)
        console.log('DB Connected')
    }
    catch(error){
        console.log('DB connection error')
    }
}
module.exports = {db}