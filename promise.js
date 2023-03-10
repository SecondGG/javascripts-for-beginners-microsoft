function promiseTimeout(ms) {
    return new Promise((resolve /*success*/ , reject /*failture*/ ) => {
        setTimeout(resolve, ms);
    });
}

promiseTimeout(2000)
    .then(() => { // Success
        console.log("Done!");
        return promiseTimeout(1000);
    }).then(() => { 
        console.log("Also done!")
        return Promise.resolve(42);
    }).then((result) => { 
        console.log(result)
    }).catch(() => { // Fail
        console.log("Error!");
    })