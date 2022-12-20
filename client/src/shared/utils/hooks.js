import { useState, useEffect } from "react";
import {fetchData,postData} from "./api";

const useModalState = () => {
    const [modal, setModal] = useState({
        visibility: false,
        issueId: 0,
        type: "",
    });

    return {
        modal,
        setModal,
    };
};

const useDataSet = () => {
    const [data, setData] = useState({
        issues: [],
        originalIssues: [],
        users: [],
    });
    /* @GetDataAPI start */
    const makeRequest = () => {
        //admin/gettmaata
        fetchData("admin/gettmaata").then((project) => {
            console.log('project data',project);
            
            setData({
                issues: project.data.issues, 
                users:[],
                originalIssues: []
            })}
            
            );
        };
        
        useEffect(() => {
            makeRequest();
        }, []);

        console.log("data at hooks", data);

    /* @GetDataAPI end */
        
    // /* @postDataAPI start */
    //     const postRequest = () => {
    //         //@path = members/createtmaIssues
    //         postData("members/createtmaIssues",data).then((res) => {
    //             console.log('createIssues data',res);
    //             setData({
    //                 issues: res.issues, 
    //                 users: res.users, 
    //                 originalIssues: res.issues
    //             })}
    //         );
    //     };
            
    //     useEffect(() => {
    //         postRequest();
    //     }, []);
    // /* @postDataAPI end */

    return {
        data,
        setData,
    };
};

// const useDataSet = () => {
//     const [data, setData] = useState({
//         issues: [],
//         originalIssues: [],
//         users: [],
//     });
//         /* @postDataAPI start */
//         const postRequest = (data) => {
//             //@path = members/createtmaIssues
//             postData("members/createtmaIssues",data).then((res) => {
//                 console.log('createIssues data',res);
//                 setData({
//                     issues: res.issues, 
//                     users: res.users, 
//                     originalIssues: res.issues
//                 })}
//             );
//         };
            
//         useEffect(() => {
//             postRequest();
//         }, []);
//     /* @postDataAPI end */

//     return {
//         data,
//         setData,
//     };
// };

export { useDataSet, useModalState};
