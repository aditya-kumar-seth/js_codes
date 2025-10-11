//========================================== promise =========================================
//1.create apromise
const myPromise = new Promise((resolve, reject) => {//new is used to create a new instance of a promise
                                // do something asynchronous meaning not blocking the main thread  
                                // like fetching data from an API or reading a file
                                setTimeout(() => {//simulating an async operation with setTimeout
                                    const success = true; // or false based on some condition
                                    if (success) {
                                        resolve('Operation was successful!');//resolve function is called when the 
                                        // operation is successful
                                    } else {
                                        reject('Operation failed.');
                                    }
                                }, 1000);
                            });
//2. use a promise

                        myPromise
                            .then((message) => {//message is the value passed to the resolve function//1
                                console.log('Success:', message);
                            })
                            .catch((error) => {//error is the value passed to the reject function
                                console.error('Error:', error);
                            })
                            .finally(() => {//4
                                console.log('Promise has been settled.');
                            });

//3. chaining promises
                        myPromise
                            .then((message) => {//then takes a callback function or value to be executed when the promise is resolved//2
                                console.log('First success:', message);
                                return 'Data from first then';      // returning a value to the next then
                            })
                            .then((data) => {                       //here data is 'Data from first then//3
                                setTimeout(() => {
                                    console.log('Second success:', data);
                                }, 1000);
                                // you can also return a new promise here
                                return new Promise((resolve) => {
                                    setTimeout(() => {
                                        resolve('Data from second then after delay');
                                    }, 1000);
                                });
                            })//this then will act as a promise itself

                            //  so till here our first promise is resolved and this new promise is created
                            .then((data) => {  //5                     
                                console.log('Third success:', data);
                            })
                            .catch((error) => {
                                console.error('Error:', error);
                            })
                            .finally(() => {//6
                                console.log('Promise chain has been settled.');
                            });