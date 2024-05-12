/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import axios from "axios";
import Loading from "./Loading";
import { Link } from "react-router-dom";
const fetchMonitor = async () => {};

const Monitors = () => {
  const [monitorsdata, setMonitors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [Message,setMessage] = useState("");
  const [Type,setType] = useState("");
  const [Query,setQuery] = useState("");
  const [Name,setName] = useState("");
  const [render,setRender] = useState(false);
//   const [close,setName] = useState("");
  useEffect(() => {
    const fetchMonitor = async () => {
      try {
        setLoading(true);
        const response = await axios.get("https://flask-9wp6.onrender.com/get_monitors");
        const data = await response.data;
        setLoading(false);
        setMonitors(data.monitors);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMonitor();
  }, []);




const postData =async (e)=>{
    try {
        const url = await axios.post("https://flask-9wp6.onrender.com/create-monitor",{
            "name":Name,
            "type":Type,
            "query":Query,
            "message":Message
        }).then((res)=>{
            console.log(res);
        })
    } catch (error) {
        console.log(error);
    }
    
}
 
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <div>

 <div className="d-flex justify-content-between my-3 me-3">
 <h3 className="text-center ms-5 bg-light">Monitors Data</h3>
 <div>
 <Link to="/metric" className="btn btn-danger me-2">Metrics</Link>
 <button type="button" className="btn btn-success " data-bs-toggle="modal" data-bs-target="#exampleModal">
  Create New Monitor
</button>
<Link className="btn btn-secondary ms-2" to="/webhooks">WebHook</Link>
 </div>

 </div>           
<div className="modal fade" id="exampleModal"  aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header ">
        <h5 className="modal-title" id="exampleModalLabel">Enter Monitor Data</h5>
        <button type="button" className="btn-close " data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <form onSubmit={postData} className="container ">
      <p>Refer Readme.md for data format </p>
              <div className="row d-flex justify-content-center border py-5 px-0 bg-light">
             
                <div className="col-md-12">
                  <div className="mb-3">
                  
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label"
                    >
                      MESSAGE
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Ex: 	High response time detected on the website"
                      value={Message}
                      onChange={(e)=>{
                        setMessage(e.target.value)
                      }}
                      required
                    />
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label"
                    >
                      NAME
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="ex: disk space"
                      value={Name}
                      onChange={(e)=>{
                        setName(e.target.value)
                      }}
                      required
                    />
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label"
                    >
                      QUERY
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="ex: sum(last_5m):sum:dupakoor{*}.as_count() > 1"
                      value={Query}
                      onChange={(e)=>{
                        setQuery(e.target.value)
                      }}
                      required
                    />
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label"
                    >
                      TYPE
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="ex: query alert"
                      value={Type}
                      onChange={(e)=>{
                        setType(e.target.value)
                      }}
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="submit" className="btn btn-primary">Save changes</button>
      </div>
            </form>
      </div>
    
    </div>
  </div>
</div>

          </div>

          <table className="table table-striped border">
            <thead>
              <tr>
                <th scope="col">S.NO</th>
                <th scope="col">NAME</th>
                <th className="col" scope="col">
                  TYPE
                </th>
                <th scope="col">QUERY</th>
                <th scope="col">MESSAGE</th>
              </tr>
            </thead>
            <tbody>
              {monitorsdata?.map((i, j) => (
                <>
                  <tr key={j}>
                    <th scope="row">{j + 1}</th>
                    <td>{i.name}</td>
                    <td>{i.type}</td>
                    <td>{i.query}</td>
                    <td>{i.message}</td>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default Monitors;
