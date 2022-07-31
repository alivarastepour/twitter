import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const useAuth = (url: string): boolean => {
  const [loading, setLoading] = useState(true);

  const router = useRouter();

  useEffect(() => {
    const navigate = async () => {
      if (!localStorage.getItem("__ut")) {
        await router.push(url);
      }
      setLoading(false);
    };

    navigate();
  }, []);

  return loading;
};

export default useAuth;
