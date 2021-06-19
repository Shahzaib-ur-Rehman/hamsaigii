import axios from "axios";
import React , {useEffect} from "react";
import { useHistory } from "react-router-dom";
const Logout = () => {
  const history = useHistory();
  useEffect(() => {
    axios
    .get("/api/users/logout")
    .then((response) => {
      console.log(response);
      history.push('/login');
    })
    .catch((error) => {
      console.log(error);
    });
  }, [])
};

export default Logout;
