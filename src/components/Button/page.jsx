"use client";
import { useRouter } from "next/navigation";

export default function Button() {
  const router = useRouter();

  function handleSort() {
    router.push("/content?sort=asc");
  }

  return (
    <div>
      <button onClick={handleSort}>SORT</button>
    </div>
  );
}
