const pro1=new Promise((resolve,reject)=>{
    const temp=3;
    if(temp>5){
        resolve('success');
    }
    else{
        reject('reject');
    }
})

pro1.then(
    (msg)=>{
        console.log(`Condition is True: ${msg}`)
    },
    (err)=>{
        console.log(`Error!~!!: ${err}`)
    });

const userLeft =false
const userWatchingCatMeme= false

function watchCallback(callback,errorcallback){
    if(userLeft){
        errorcallback({
            name:'User Left',
            message: ':('
        })
    }else if(userWatchingCatMeme){
        errorcallback({
            name:'User Watching Cat Meme',
            message:'Assignment < cat'
        })
    }else {
        callback('Thumbs up')
    }
}

watchCallback((message)=>{
    console.log('Success: '+message)
},(error)=>{
    console.log(error.name+ ' '+ error.message);
})