import { useEffect } from "react";
import { createRoot } from "react-dom/client";

export default function CreateRootTest() {
  const htmlSample = `<div>div div div<div id="sample">This is HTML sample</div></div>`;

  useEffect(() => {
    const targetHTML = createRoot(document.getElementById("sample") as HTMLElement);
    targetHTML.render(<div style={{ color: "red" }}>DOM CHANGE</div>);
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: htmlSample }}></div>;
}
