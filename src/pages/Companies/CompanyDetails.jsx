import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../api/api";

function CompanyDetails() {
  const { id } = useParams();
  const [company, setCompany] = useState(null);

  useEffect(() => {
    async function fetchCompany() {
      try {
        const token = localStorage.getItem("token");

        const response = await api.get(`/companies/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setCompany(response.data.company);
      } catch (error) {
        console.log(error);
      }
    }

    fetchCompany();
  }, [id]);

  if (!company) {
    return <h2>Loading...</h2>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Company Details</h1>

      <p><strong>Name:</strong> {company.name}</p>
      <p><strong>Location:</strong> {company.location}</p>
      <p><strong>Employees:</strong> {company.num_of_emp}</p>
    </div>
  );
}

export default CompanyDetails;