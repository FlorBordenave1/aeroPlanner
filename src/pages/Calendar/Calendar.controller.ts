import { useEffect, useState } from "react";
import { getFlights } from "services/flight/getFlights";
import { Flight } from "services/flight/types";

const useCalendarController = () => {
  const [flights, setFlights] = useState<Flight[]>();

  const fetchFlights = async () => {
    try {
      const data = await getFlights();
      setFlights(data.data.flights);
    } catch (e: any) {
      console.log("error", e);
    }
  };

  useEffect(() => {
    fetchFlights();
  }, []);

  return {
    flights,
  };
};

export default useCalendarController;
