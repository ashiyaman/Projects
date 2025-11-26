//Promises

const fetchData  = new Promise((resolve, reject) => {
    let getData = true
    if(getData){
        resolve('Got the data')
    }
    else{
        reject('Failed to fetch data')
    }
})

fetchData
    .then((data) => console.log(data))
    .catch((error) => console.log(error))

const fetchAnotherData = async() => {
    try{
        const data = await fetch(url)
        const response = await data.response
        return response
    }
    catch(error){
        console.log(error)
    }
}