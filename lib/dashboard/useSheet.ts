"use client";

import { useEffect, useState } from "react";

export function useSheet<T>(sheetName: string) {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let alive = true;

    fetch(`/api/sheets/${sheetName}`)
      .then((r) => r.json())
      .then((res) => {
        if (!alive) return;
        if (res.ok) setData(res.data);
        else setError(res.error);
      })
      .catch((e) => alive && setError(String(e)))
      .finally(() => alive && setLoading(false));

    return () => {
      alive = false;
    };
  }, [sheetName]);

  return { data, loading, error };
}