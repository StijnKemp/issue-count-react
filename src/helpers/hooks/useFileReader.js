import { useMemo } from "react";

function useFileReader(onLoad) {
  const fileReader = useMemo(() => {
    const fr = new FileReader();

    fr.onload = onLoad;
    fr.onerror = () => console.log(fr.error);

    return fr;
  }, []);

  return fileReader;
}

export default useFileReader;
