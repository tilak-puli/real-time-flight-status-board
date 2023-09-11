import { useGetFlightsList } from "../../API/API";
import { Container, Paper, Typography } from "@mui/material";
import { formatDateTime, timeDiffFromNow } from "../../util";
import { useNavigate } from "react-router-dom";
import { FlightStatus } from "../FlightDetails/FlightStatus";
import {
  DataGrid,
  GridColDef,
  GridRenderCellParams,
  GridValueGetterParams,
} from "@mui/x-data-grid";

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
    width: 160,
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

  if (!flightsList.data) {
    return <div />;
  }

  const rows = flightsList.data;

  return (
    <Container>
      <Container sx={{ textAlign: "right" }}>
        <Typography gutterBottom>
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
