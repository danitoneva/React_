import React, { useState } from "react";
import { IArg0 } from "./App";

interface TableProps{
  campaigns: IArg0[]
}

export const Table = ({ campaigns } : TableProps) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Campaign name</th>
          <th>Campaign Game</th>
          <th>Campaign start date</th>
          <th>Campaign budget</th>
          <th>Campaign language</th>
        </tr>
      </thead>
      <tbody>
        {campaigns.map((campaign: { name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; game: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; startDate: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; budget: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; language: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }, index: React.Key | null | undefined) => (
          <tr key={index}>
            <td>{campaign.name}</td>
            <td>{campaign.game}</td>
            <td>{campaign.startDate}</td>
            <td>{campaign.budget}</td>
            <td>{campaign.language}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
