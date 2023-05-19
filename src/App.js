import dayjs from "dayjs";
import { Helmet } from "react-helmet";
import { QueryClient, QueryClientProvider } from "react-query";

import "./App.css";
import { CalendarContext } from "./store/CalendarContext";
import CalendarScreen from "./Pages/CalendarScreen";

function App() {
  const currentDay = dayjs();
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <CalendarContext.Provider value={currentDay}>
        <Helmet>
          <link
            rel="icon"
            href={`https://calendar.google.com/googlecalendar/images/favicons_2020q4/calendar_${
              currentDay.date() || 1
            }.ico`}
          />
        </Helmet>
        <div className="App">
          <CalendarScreen />
        </div>
      </CalendarContext.Provider>
    </QueryClientProvider>
  );
}

export default App;
