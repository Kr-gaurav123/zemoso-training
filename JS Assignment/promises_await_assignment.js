/**
*
* Assume we are fetching the data from a rest endpoint in the get data function.
* we can simulate the same by replacing the setTimeout with fetch api and executing the same in a browser.
*
*/

/*

function getData(uId) {
    setTimeout(() => {
    console.log("Fetched the data!");
    return "skc@gmail.com";
    }, 4000);
    }
    
    console.log("start");
    var email = getData("skc");
    console.log("Email id of the user id is: " + email);
    console.log("end");

    */
/*
    
   // Using Promises and Async Await.

    function getData(uId) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log("Fetched the data!");
                resolve(uId +"@gmail.com");
            }, 3000);
        });
    }
    
    async function getEmail() {
        console.log("start");
        var email = await getData("skc");
        console.log("Email id of the user id is: " + email);
        console.log("end");
    }
    
    getEmail();

*/



//using callback


    function getData(uId, callback) {
        setTimeout(() => {
            console.log("Fetched the data!");
            callback(uId +"@gmail.com");
        }, 4000);
    }
    
    console.log("start");
    getData("skc", function(email) {
    console.log("Email id of the user id is: " + email);
    });
    console.log("end");