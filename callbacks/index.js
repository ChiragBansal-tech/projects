async function forEach(array, callback){
    for(let index = 0; index < array.length; index++){
        await callback(array[index], index, array);
    }
}

forEach([1, 2, 3], async (num) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log(num);
});