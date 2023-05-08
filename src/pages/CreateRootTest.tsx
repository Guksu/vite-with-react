import { useEffect } from "react";
import { createRoot } from "react-dom/client";

export default function CreateRootTest() {
  const htmlSample = `<div>div div div<div id="sample">This is HTML sample</div><div id="sample">This is HTML sample</div></div>`;

  useEffect(() => {
    const targetNode = document.querySelectorAll("#sample");

    targetNode.forEach((node, index) => {
      const nodeChange = createRoot(node);
      nodeChange.render(<div style={{ color: "red" }}>index : {index} NODE CHANGE</div>);
    });
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: htmlSample }}></div>;
}
