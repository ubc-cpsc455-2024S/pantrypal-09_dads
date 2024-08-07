import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { API_URL, env } from "../consts";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();


  const login = async (email, password) => {
    setIsLoading(true);
    setError(null);


    const response = await fetch(API_URL + "/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const json = await response.json();
    
    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
    }

    if (response.ok) {
      if(env == "test") {
        console.log(json);
      }
      
      // Save data in local storage
      localStorage.setItem("user_" + env, JSON.stringify(json));

      // update the auth context
      dispatch({ type: "LOGIN", payload: json });

      // update loading state
      setIsLoading(false);
    }
  };

  return { login, isLoading, error };
};
