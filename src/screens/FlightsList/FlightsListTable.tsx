import { FlightStatusDetails, useGetFlightsList } from "../../API/API";
import {
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { formatDateTime, timeDiffFromNow } from "../../util";
import { useNavigate } from "react-router-dom";
import { FlightStatus } from "../FlightDetails/FlightStatus";

export function FlightsListTable() {
  const navigate = useNavigate();
  let flightsList = useGetFlightsList();

  return (
    <Container>
      <Container sx={{ textAlign: "right" }}>
        <Typography>
          Last updated on: {timeDiffFromNow(flightsList.updatedOn)}
        </Typography>
      </Container>
      <Table component={Paper}>
        <TableHead>
          <TableRow>
            <TableCell>Flight Number</TableCell>
            <TableCell>Airline</TableCell>
            <TableCell>From</TableCell>
            <TableCell>To</TableCell>
            <TableCell>Departure Time</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {flightsList.data?.map((flight: FlightStatusDetails) => (
            <TableRow
              // @ts-ignore
              key={flight.id}
              hover
              onClick={() => navigate(`flight-details/${flight.id}`)}
            >
              <TableCell>{flight.flightNumber}</TableCell>
              <TableCell>{flight.airline}</TableCell>
              <TableCell>{flight.origin}</TableCell>
              <TableCell>{flight.destination}</TableCell>
              <TableCell>{formatDateTime(flight.departureTime)}</TableCell>
              <TableCell>{<FlightStatus status={flight.status} />}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
}
