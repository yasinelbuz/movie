import { useRoutes } from "react-router-dom";
import Constant from "@/constant";

function App() {
	return <>{useRoutes(Constant.routes)}</>;
}

export default App;
