import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const useAuth = (url: string, forwarding: boolean): boolean => {
  const [loading, setLoading] = useState(true);

  const router = useRouter();

  useEffect(() => {
    const navigate = async () => {
      const routerCondition = forwarding
        ? localStorage.getItem("__ut")
        : !localStorage.getItem("__ut");
      if (routerCondition) {
        await router.push(url);
      }
      setLoading(false);
    };

    navigate();
  }, []);

  return loading;
};

export default useAuth;
