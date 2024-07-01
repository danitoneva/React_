import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { Form } from "./Form";
import {TableCampaign} from "./Table";
import { INewData } from "./interface";

export default function App() {
  const [campaigns, setCampaigns] = useState<INewData[]>([]);

  const addCampaign = (newCampaign: INewData) => {
    setCampaigns([...campaigns, newCampaign]);
  };

  return (
    <div>
      <h1>Gameinfluencer marketing campaign</h1>
      <Form addCampaign={addCampaign} />
      <TableCampaign campaigns={campaigns} />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
