import { useCallback, useEffect, useState } from "react";

export default function useAuth() {
  const [token, setToken] = useState(null);
  const [userID, setUserID] = useState(null);
  const [ready, setReady] = useState(false);

  const login = useCallback((jwtToken, id) => {
    setToken(jwtToken);
    setUserID(id);

    localStorage.setItem(
      "userData",
      JSON.stringify({
        userID: id,
        token: jwtToken,
      })
    );
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    setUserID(null);
    localStorage.removeItem("userData");
  }, []);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("userData"));

    if (data && data.token) {
      login(data.token, data.userID);
    }

    setReady(true);
  }, [login]);

  return { login, logout, token, userID, ready };
}
