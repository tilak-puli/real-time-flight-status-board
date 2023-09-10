import { FlightStatus, useGetFlightsList } from "../../API/API";
import {
  Container,
  Paper,
  styled,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { formatDateTime } from "../../util";

const StyledTable = styled(Table)({});

export function FlightsListTable() {
  let flightsList = useGetFlightsList();

  return (
    <Container>
      <StyledTable component={Paper}>
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
          {flightsList.data?.map((flight: FlightStatus) => (
            <TableRow key={flight.id} hover>
              <TableCell>{flight.flightNumber}</TableCell>
              <TableCell>{flight.airline}</TableCell>
              <TableCell>{flight.origin}</TableCell>
              <TableCell>{flight.destination}</TableCell>
              <TableCell>{formatDateTime(flight.departureTime)}</TableCell>
              <TableCell>{flight.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </StyledTable>
    </Container>
  );
}
