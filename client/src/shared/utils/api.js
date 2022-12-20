// const BASE_URL = "https://jira-clone-pedja.herokuapp.com/";
// const BASE_URL = "192.168.1.170:5000";
const BASE_URL = "http://192.168.1.170:6002/api/v1.0";
// const BASE_URL = "http://192.168.1.170:6002/api/v1.0/admin/getData"; // get issues
// const BASE_URL = "192.168.1.170:6002/api/v1.0/members/createIssues/";// post issues
// 192.168.1.170:6002/api/v1.0/members/createtmaIssues/

// Get data API
 function fetchData(path) {
    console.log('path',path);
    const apiData= fetch(`${BASE_URL}/${path}`).then((data) => data.json());
    // const apiData=  fetch(`${BASE_URL}`).then((data) => data.json());
    console.log('apiData',apiData);
    return  apiData;
}



 function  postData (path,data) {
  console.log("path",path,"data",data);
    postURL=`${BASE_URL}/${path}`;
    const response = fetch(postURL, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          // 'Content-Type': 'multipart/form-data'
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data) // body data type must match "Content-Type" header
      })
      .then((data)=>{
          console.log("res===>",data);
        })
    return response;
}

module.exports ={ 
    fetchData,
    postData
}
