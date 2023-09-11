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
import { useNavigate } from "react-router-dom";
const StyledTable = styled(Table)({});

export function FlightsListTable() {
  const navigate = useNavigate();
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
            <TableRow
              key={flight.id}
              hover
              onClick={() => navigate(`flight-details/${flight.id}`)}
            >
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
