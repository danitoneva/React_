import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { Form } from "./Form";
import {Table} from "./Table";
import { INewData } from "./Interface";

export default function App() {
  const [campaigns, setCampaigns] = useState<INewData[]>([]);

  const addCampaign = (newCampaign: INewData) => {
    setCampaigns([...campaigns, newCampaign]);
  };

  return (
    <div>
      <h1>Gameinfluencer marketing campaign</h1>
      <Form addCampaign={addCampaign} />
      <Table campaigns={campaigns} />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
