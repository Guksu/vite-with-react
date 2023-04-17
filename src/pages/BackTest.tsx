import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function BackTest() {
  const [strArray, setStrArray] = useState<string[]>([]);
  const navigation = useNavigate();

  const onNextClick = () => {
    {
      strArray.length === 0 && setStrArray(["1"]);
    }
    {
      strArray.length === 1 && setStrArray(["1", "2"]);
    }
  };

  const preventGoBack = () => {
    history.pushState(null, "", location.href);
    if (strArray.length === 0) {
      console.log("1");
      navigation("/");
    } else if (strArray.length === 2) {
      console.log("2");
      setStrArray(["1"]);
    } else if (strArray.length === 1) {
      console.log("3");
      setStrArray([]);
    }
  };

  useEffect(() => {
    history.pushState(null, "", location.href);
    window.addEventListener("popstate", preventGoBack);

    return () => {
      window.removeEventListener("popstate", preventGoBack);
    };
  }, [strArray]);

  return (
    <div>
      {strArray.length === 0 && <div>0</div>}
      {strArray.length === 1 && <div>1</div>}
      {strArray.length === 2 && <div>2</div>}
      <button onClick={onNextClick}>배열추가</button>
    </div>
  );
}
