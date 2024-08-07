import { useAuthContext } from "./useAuthContext";
import { env } from "../consts";

export const useLogout = () => {
  const { dispatch } = useAuthContext();

  const logout = () => {
    // remove user from storage
    localStorage.removeItem("user_" + env);
    dispatch({ type: "LOGOUT" });
  };

  return { logout };
};
