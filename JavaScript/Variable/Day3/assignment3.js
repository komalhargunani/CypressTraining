

function getPromise() {
  let promise = new Promise(function (resolve, reject) {
    const fs = require('fs')
    
    fs.readFile('/home/excellarate/cypress/Training/JavaScript/Variable/Day3/Assignment3','utf8', function(err,data) {
      if (err) {
          throw err;
          reject();
      }else{
      resolve();
      //content = data;
      console.log(data);
    }
  });
});

  return promise;
}

async function verifyData(){
  await getPromise();
}


verifyData();