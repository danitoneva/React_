import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { Form } from "./Form";
import {Table} from "./Table";

export interface IArg0 {
  name: string;
  game: string;
  startDate: string;
  budget: string;
  language: string;
}

export default function App() {
  const [campaigns, setCampaigns] = useState<IArg0[]>([]);

  const addCampaign = (newCampaign: IArg0) => {
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
