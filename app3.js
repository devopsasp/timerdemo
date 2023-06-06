const timeout=setImmediate(()=>{
    console.log("immediate ")
})
clearImmediate(timeout)