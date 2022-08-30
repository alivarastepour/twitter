import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios, { AxiosError } from "axios";

import { HOST } from "../public/host";

const useAuth = (url: string, forwarding: boolean): boolean => {
  const [loading, setLoading] = useState(true);

  const [alert, fireAlert] = useState(false);

  const router = useRouter();

  useEffect(() => {
    // function below prevents direct changes made to browser's localstorage
    // in devTools to cause auth problems and does not have effect if changes are from script
    const storageHandler = (event: StorageEvent): void => {
      if (event.key === "__ut")
        if (event.oldValue !== event.newValue) fireAlert((prev) => !prev);
    };
    window.addEventListener("storage", storageHandler);
    return () => window.removeEventListener("storage", storageHandler);
  }, []);

  useEffect(() => {
    const tokenValidation = async () => {
      if (!localStorage.getItem("__ut")) {
        if (!forwarding) {
          await router.push(url);
        }
      } else {
        await axios
          .get(`${HOST}/user`, {
            headers: {
              authorization: `Token ${localStorage.getItem("__ut")}`,
            },
          })
          .then(async () => {
            if (forwarding) {
              await router.push(url);
            }
          })
          .catch(async (error: AxiosError) => {
            if (error.response.status === 403)
              if (!forwarding) {
                await router.push(url);
              }
          });
      }
      setLoading(false);
    };

    tokenValidation();
  }, [alert]);

  return loading;
};

export default useAuth;
