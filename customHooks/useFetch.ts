import { useCallback } from "react";

import axios, { AxiosResponse } from "axios";

import useSWR from "swr";
import { SWRResponse } from "swr/dist/types";

const useFetch = (url: string): SWRResponse<AxiosResponse<any, any>> => {
  const fetchData = useCallback(
    (url: string): Promise<AxiosResponse<any, any>> => {
      return axios.get(url, {
        headers: {
          authorization: `Token ${localStorage.getItem("__ut")}`,
        },
      });
    },
    [url]
  );

  return useSWR(url, fetchData);
};
export default useFetch;
