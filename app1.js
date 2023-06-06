const timeout=setTimeout(()=>{
    console.log("timeout happened")
},3000)

timeout.unref()
console.log("call back has to be invoked")
timeout.ref()