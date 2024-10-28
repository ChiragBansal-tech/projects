const log = date => type => message => {
    console.log(`[${date}] [${type}] [${message}]`)
};

const logInfo = log(new Date().toISOString())('INFO');
logInfo('This is an informational message.');