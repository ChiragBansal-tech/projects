function throttle(func, limit){
    let lastFunc;
    let lastRan;

    return function(...args){
        const context = this;
        if(!lastRan){
            func.apply(context, args);
            lastRan = Date.now();
        }
        else{
            clearTimeout(lastFunc);
            lastFunc = setTimeout(function(){
                if((Date.now() - lastRan) >= limit){
                    func.apply(context, args);
                    lastRan = Date.now();
                }
            }, limit - (Date.now() - lastRan));
        }
    };
}

const log = () => console.log('Throttled!');

const throttledLog = throttle(log, 2000);

window.addEventListener('resize', throttledLog);