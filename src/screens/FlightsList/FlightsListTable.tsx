import { FlightStatusDetails, useGetFlightsList } from "../../API/API";
import { Container, Paper, TextField, Typography } from "@mui/material";
import { formatDateTime, timeDiffFromNow } from "../../util";
import { useNavigate } from "react-router-dom";
import { FlightStatus } from "../FlightDetails/FlightStatus";
import {
  DataGrid,
  GridColDef,
  GridRenderCellParams,
  GridValueGetterParams,
} from "@mui/x-data-grid";
import React, { useState } from "react";

const columns: GridColDef[] = [
  {
    field: "flightNumber",
    headerName: "Flight Number",
    width: 150,
  },
  {
    field: "airline",
    headerName: "Airline",
    width: 200,
  },
  {
    field: "origin",
    headerName: "Origin",
    width: 200,
  },
  {
    field: "destination",
    headerName: "Destination",
    width: 200,
  },
  {
    field: "departureTime",
    headerName: "Departure Time",
    width: 200,
    valueGetter: (params: GridValueGetterParams) =>
      formatDateTime(params.row.departureTime),
  },
  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params: GridRenderCellParams<String>) => (
      <Container>
        <FlightStatus status={params.value} />
      </Container>
    ),
  },
];

export function FlightsListTable() {
  const navigate = useNavigate();
  let flightsList = useGetFlightsList();
  const [searchText, setSearchText] = useState("");

  if (!flightsList.data) {
    return <div />;
  }

  const rows = flightsList.data?.filter((row: FlightStatusDetails) =>
    [row.flightNumber, row.origin, row.destination, row.airline].some((val) =>
      val.includes(searchText),
    ),
  );

  return (
    <Container>
      <Typography variant={"h5"} mb={2} sx={{ textAlign: "center" }}>
        List of flights
      </Typography>
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
          pb: 1,
        }}
      >
        <TextField
          label="Search"
          variant="standard"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setSearchText(event.target.value);
          }}
        />
        <Typography>
          Last updated: {timeDiffFromNow(flightsList.updatedOn)}
        </Typography>
      </Container>
      <Paper>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10,
              },
            },
          }}
          onRowClick={(params) => {
            navigate(`/flight-details/${+params.id}`);
          }}
          pageSizeOptions={[10]}
        />
      </Paper>
    </Container>
  );
}
