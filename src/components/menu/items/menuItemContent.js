import StoredPage from "../../../pages/StoredPage";
import NumberExamplePage from "../../../pages/NumberExamplePage";
import ObjectExamplePage from "../../../pages/ObjectExamplePage";
import ArrayExamplePage from "../../../pages/ArrayExamplePage";

const menuPoints = [
  { path:"number", lbl:"NUMBER", element: <NumberExamplePage /> },
  { path:"object", lbl:"OBJECT", element: <ObjectExamplePage /> },
  { path:"array",  lbl:"ARRAY",  element: <ArrayExamplePage /> },
  { path:"stored", lbl:"STORED", element: <StoredPage /> }
];

export default menuPoints;
