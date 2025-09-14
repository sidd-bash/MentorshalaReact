// import "./userList.css";
import '../css/page/userList.css'
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from "@mui/icons-material";
import { userRows } from "../dummyData";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import http from '../../../http-common'
function UserList() {
  const [menteeData, setMenteeData] = useState([]);
  const [mentorData, seMentortData] = useState([]);

  useEffect(()=>{
    http.get('/get/Mentee/details')
    .then(res=>{
      // console.log(res);
      setMenteeData(res.data)
    })
    .catch(err=>{
      console.log(err);
    })
    http.get('/get/Mentor/details')
    .then(res=>{
      console.log(res);
      seMentortData(res.data)
    })
    .catch(err=>{
      console.log(err);
    })
  },[])
  // console.log(data);
  // const handleDelete = (id) => {
  //   setData(data.filter((item) => item.id !== id));
  // };
  
  // const columns = [
  //   // { field: "id", headerName: "ID", width: 90 },
  //   {
  //     field: "firstName",
  //     headerName: "firstName",
  //     width: 200,
  //     renderCell: (params) => {
  //       return (
  //         <div className="userListUser">
  //           <img className="userListImg" src={params.row.profilePic} alt="" />
  //           {params.row.firstName}
  //         </div>
  //       );
  //     },
  //   },
  //   { field: "Email", headerName: "Email", width: 200 },
    // {
    //   field: "status",
    //   headerName: "Status",
    //   width: 120,
    // },
    // {
    //   field: "transaction",
    //   headerName: "Transaction Volume",
    //   width: 160,
    // },
    // {
    //   field: "action",
    //   headerName: "Action",
    //   width: 150,
    //   renderCell: (params) => {
    //     return (
    //       <>
    //         <Link to={"/admin/user/" + params.row.id}>
    //           <button className="userListEdit">Edit</button>
    //         </Link>
    //         <DeleteOutline
    //           className="userListDelete"
    //           // onClick={() => handleDelete(params.row.id)}
    //         />
    //       </>
    //     );
    //   },
    // },
  // ];

  return (
    <div className="userList">
       <h1>Mentor list</h1>
      <table class="styled-table">
        <thead>
            <tr>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
                <th>College</th>
                <th>Specialization</th>
                <th>location</th>
            </tr>
        </thead>
        <tbody>
          {
            menteeData.map((item)=>{
              return(
                <tr>
                  <td>{item.firstName} {item.lastName}</td>
                  <td>{item.username}</td>
                  <td>{item.Email}</td>
                  <td>{item.college}</td>
                  <td>{item.specialization}</td>
                  <td>{item.from}</td>
                  

                </tr>
              )
            } )
          }
            
        </tbody>
      </table>

      <h1>Mentee list</h1>
      <table class="styled-table">
        <thead>
            <tr>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
                <th>College</th>
                <th>Specialization</th>
                <th>location</th>
            </tr>
        </thead>
        <tbody>
          {
            mentorData.map((item)=>{
              return(
                <tr>
                  <td>{item.firstName} {item.lastName}</td>
                  <td>{item.username}</td>
                  <td>{item.Email}</td>
                  <td>{item.college}</td>
                  <td>{item.specialization}</td>
                  <td>{item.from}</td>
                  

                </tr>
              )
            } )
          }
            
        </tbody>
      </table>
    </div>
  );
}

export default UserList;