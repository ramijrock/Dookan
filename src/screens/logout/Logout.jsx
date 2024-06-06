import React, { useContext, useEffect } from "react";
import { clearUserData } from "../../utils/Utils";
import appContext from "../../context/appContext";

const Logout = () => {
  const context = useContext(appContext);

  useEffect(() => {
    clearUserData("user_details");
    context.unsetUserData();
  }, []);

  return null;
};

export default Logout;
