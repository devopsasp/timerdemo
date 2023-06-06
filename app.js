const timeout=setInterval(()=>{
console.log("interval after every 10 seconds")
},1000)

setTimeout(()=>{
     clearInterval(timeout)
},3000)