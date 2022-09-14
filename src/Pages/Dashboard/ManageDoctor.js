import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import DoctorRow from "./DoctorRow";

const ManageDoctor = () => {
  const { data: doctors, isLoading, refetch } = useQuery("doctors", () =>
    fetch("http://localhost:5000/doctor", {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <h2>This is manage doctors list: {doctors.length}</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th>Ser</th>
              <th>Avatar</th>
              <th>Name</th>
              <th>Speciality</th>
              <th>Aciton</th>
            </tr>
          </thead>
          <tbody>
          
            {
            doctors.map((doctor,index)=><DoctorRow
            key={index}
            doctor={doctor}
            index={index}
            refetch={refetch}
            />)
            }
           
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageDoctor;
