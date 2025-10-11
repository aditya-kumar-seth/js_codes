//========================================== promise =========================================
//1.create apromise
const myPromise = new Promise((resolve, reject) => {
                                setTimeout(() => {
                                    const success = true; // or false based on some condition
                                    if (success) {
                                        resolve('Operation was successful!');//resolve function is called when the 
                                        // operation is successful
                                    } else {
                                        reject('Operation failed.');
                                    }
                                }, 1000);
                            });
//2. consume a promise using async/await
                            async function consumePromise(){//
                                try{
                                    const result = await myPromise; //await is used to wait for the promise to resolve
                                    console.log('Success:', result);
                                }
                                catch(error){//error is the value passed to the reject function and result will be undefined
                                    console.log(error);
                                }
                                finally{
                                    console.log('Promise has been handled ');
                                } 
                            }                   
consumePromise();//calling the function to consume the promise