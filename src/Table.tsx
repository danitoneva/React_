import React from "react";
import { INewData } from "./interface";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

interface TableProps {
  campaigns: INewData[];
}

export const TableCampaign = ({ campaigns }: TableProps) => {
  return (
    <TableContainer style={{ width: "50%", margin: "auto", fontFamily: "" }}>
      <Table sx={{ minWidth: 300 }}>
        <TableHead>
          <TableRow>
            <TableCell
              style={{
                color: "white",
                textAlign: "center",
                fontFamily:
                  "Gill Sans, Gill Sans MT, Calibri, Trebuchet MS, sans-serif",
              }}
            >
              Campaign name
            </TableCell>
            <TableCell
              style={{
                color: "white",
                textAlign: "center",
                fontFamily:
                  "Gill Sans, Gill Sans MT, Calibri, Trebuchet MS, sans-serif",
              }}
            >
              Campaign Game
            </TableCell>
            <TableCell
              style={{
                color: "white",
                textAlign: "center",
                fontFamily:
                  "Gill Sans, Gill Sans MT, Calibri, Trebuchet MS, sans-serif",
              }}
            >
              Campaign start date
            </TableCell>
            <TableCell
              style={{
                color: "white",
                textAlign: "center",
                fontFamily:
                  "Gill Sans, Gill Sans MT, Calibri, Trebuchet MS, sans-serif",
              }}
            >
              Campaign budget
            </TableCell>
            <TableCell
              style={{
                color: "white",
                textAlign: "center",
                fontFamily:
                  "Gill Sans, Gill Sans MT, Calibri, Trebuchet MS, sans-serif",
              }}
            >
              Campaign language
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {campaigns.map((campaign, index) => (
            <TableRow key={index}>
              <TableCell
                style={{
                  textAlign: "center",
                  fontFamily:
                    "Gill Sans, Gill Sans MT, Calibri, Trebuchet MS, sans-serif",
                }}
              >
                {campaign.name}
              </TableCell>
              <TableCell
                style={{
                  textAlign: "center",
                  fontFamily:
                    "Gill Sans, Gill Sans MT, Calibri, Trebuchet MS, sans-serif",
                }}
              >
                {campaign.game}
              </TableCell>
              <TableCell
                style={{
                  textAlign: "center",
                  fontFamily:
                    "Gill Sans, Gill Sans MT, Calibri, Trebuchet MS, sans-serif",
                }}
              >
                {campaign.startDate}
              </TableCell>
              <TableCell
                style={{
                  textAlign: "center",
                  fontFamily:
                    "Gill Sans, Gill Sans MT, Calibri, Trebuchet MS, sans-serif",
                }}
              >
                {campaign.budget}
              </TableCell>
              <TableCell
                style={{
                  textAlign: "center",
                  fontFamily:
                    "Gill Sans, Gill Sans MT, Calibri, Trebuchet MS, sans-serif",
                }}
              >
                {campaign.language}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
