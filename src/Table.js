import React, { useState } from "react";

export function Table({ campaigns }) {
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
        {campaigns.map((campaign, index) => (
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

export default Table;
