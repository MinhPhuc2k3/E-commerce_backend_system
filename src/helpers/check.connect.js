'use strict'

const  mongoose = require('mongoose')
const os = require('os')
const process = require('process')
// count connect
const countConnect = () => {
    const numConnection = mongoose.connections.length
    console.log(`Number of connections::${numConnection}`);
}
// check overload

const checkOverLoad = ()=>{
    setInterval(()=>{
        const numConnection = mongoose.connections.length
        const numCores = os.cpus().length
        const memoryUsages = process.memoryUsage().rss;
        console.log(`Activated Connections:: ${numConnection}`)
        console.log(`Memory usages: ${memoryUsages/1024/1024} MB`)
        const maxConnections = numCores*5;
        if(numConnection>maxConnections){
            console.log('Connections overload detected')
        }
    }, 5000)
}
module.exports = {countConnect, checkOverLoad}