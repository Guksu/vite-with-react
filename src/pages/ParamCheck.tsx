import { Navigate, useLocation, useParams } from "react-router-dom";

export default function ParamCheck() {
  const params = useParams();
  const query = useLocation();

  console.log(`params : ${params.id}`);
  console.log(`query : ${query.search}`);

  //Redirect
  if (params.id === "toAbout") {
    return <Navigate to="/about" replace={true} />;
  }

  return <div>파람체크</div>;
}
