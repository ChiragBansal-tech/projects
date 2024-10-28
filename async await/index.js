async function fetchData(url){
    try{
        const response = await fetch(url)
        if(!response.ok){
            throw new Error(`HTTP error! Status:{response.status}`)
        }
        const result = await response.json()
        return result;
    }
    catch(error){
        console.error(error)
        throw error;
    }
}

fetchData('https://api.example.com/data')
    .then(data => console.log(data))
    .then(error => console.log(error));