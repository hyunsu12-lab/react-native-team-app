// app/index.tsx

import { useRouter } from "expo-router";
import { useEffect } from "react";

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    // setTimeout은 "라우터가 렌더링 이후"에 실행됨. (임시 우회법)
    const timer = setTimeout(() => {
      router.replace("/login");
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  return null;
}
