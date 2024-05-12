/* eslint-disable no-unused-vars */
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Monitors() {
  const [metricsdata, setMetricsdata] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchMetrics = async () => {
      try {
        setLoading(true);
        const response = await axios.get("https://flask-9wp6.onrender.com/get_metrics");
        const data = await response.data;
        console.log(data);
        setMetricsdata(data.monitors.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMetrics();
  }, []);
  console.log(metricsdata);
  return (
    <>
    <Link to="/" className="btn btn-danger mx-2 my-2">Monitors</Link>
      <div>
        <table className="table table-striped border">
          <thead>
            <tr>
              <th scope="col">S.no</th>
              <th scope="col">Name</th>
              <th className="col" scope="col">
                type
              </th>
            </tr>
          </thead>
          <tbody>
            {metricsdata?.map((I,J) => (
              <>
                <tr>
                  <th scope="row">{J+1}</th>

                  <td>{I.id}</td>
                  <td>{I.type}</td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
