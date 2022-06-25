//creating a custom hooks that will keep all our states in this file

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../actions/userAction";
import { useNavigate } from "react-router-dom";

const useAccountForm = (validate) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userLoginState = useSelector((state) => state.userLogin);
  const { success, userInfo } = userLoginState;

  // useEffect(() => {
  //   if (!userInfo) {
  //     navigate("/");
  //   }
  // }, [userInfo]);

  const [values, setValues] = useState({
    //passing an array where values is initial values and the function to update the state
    email: "",
    password: "", //whenever the user is typing whatever is writtened will be save in the corresponding property ma will be stored
  });

  const [errors, setErrors] = useState({});

  const handleInputs = (e) => {
    //e: event   //whenever user change smtg this function will update the values
    const { name, value } = e.target; //targeting the name of each input  // targeting value where user is typing to get the values
    setValues({
      ...values, //spread operator used to make an exact copy of an existing array, here it is used to required every data of user by creating an object
      [name]: value, //square bracket is used here to get dynamic data, it means [name]= variable/property value whatever we have passed before this, which is email, and value is whatever user is typing
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(userLogin(values.email, values.password));

    setErrors(validate(values));
  };

  return { handleInputs, values, handleSubmit, errors };
};

export default useAccountForm;
