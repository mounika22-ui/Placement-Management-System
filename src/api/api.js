// frontend---> req ---->5000 backend
// frontend--->localhost:5000/students/:id
// frontend--->baseURL/students/:id

import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000/api",
});

export default api;

//ocalhost:8000/students/:id
// api.get("/students/:id")

                        // React
                        //   |
                        // api.js
                        //   |
                        // backend    
                        