import React from "react";
import { useLocation } from "react-router-dom";

function useQuery(param) {
  const { search } = useLocation();
  const query = new URLSearchParams(search).get(param);

  return query ? query : "";
}

export default useQuery;
