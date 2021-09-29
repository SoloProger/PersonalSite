import React, { useCallback, useState } from "react";

export default function useFetching(callback) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const dataRequest = useCallback(
    async (url, method = "GET", body = null, headers = {}) => {
      setLoading(true);
      try {
        if (body) {
          body = JSON.stringify(body);
          headers["Content-Type"] = "application/json";
        }

        const response = await fetch(url, { method, body, headers });
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Ошибка клиента, повторите позже");
        }

        setLoading(false);
        return data;
      } catch (error) {
        setLoading(false);
        setError(error.message);
        throw error;
      }
    },
    []
  );

  const clearError = useCallback(() => setError(null), []);

  return { dataRequest, loading, error, clearError };
}
