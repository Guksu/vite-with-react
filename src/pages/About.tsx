import { useLocation, useParams } from "react-router-dom";

export default function About() {
  const params = useParams();
  const query = useLocation();

  console.log(`params : ${params}`);
  console.log(`query : ${query}`);

  return <div>이것은 어바웃 페이지</div>;
}
