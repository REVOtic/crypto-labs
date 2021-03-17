const prompt = require('prompt')

function getUserInput(){
prompt.start()
return new Promise((resolve, reject)=>{
    let res 
    prompt.get(['option'], (err, result)=>{
        if(parseInt(result.option) < 0 || parseInt(result.option) > 9) {
            return reject(false)
        } 
    resolve (parseInt(result.option))

    })
})
}
module.exports ={getUserInput};