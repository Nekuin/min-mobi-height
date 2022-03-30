import { Eventcalendar } from "@mobiscroll/react";
import { useMemo, useCallback, useState } from "react";

const Calendar = () => {
  const view = useMemo(() => {
    return {
      timeline: {
        type: "day",
        timeCellStep: 60,
        timeLabelStep: 60,
        size: 1,
      },
    };
  }, []);

  const renderEvent = useCallback((event) => {
    if (event.original.other) {
      return (
        <div style={{ backgroundColor: "lightgreen" }}>
          <p>Event</p>
          <p>Event</p>
        </div>
      );
    }
    return (
      <div style={{ backgroundColor: "yellow" }}>
        <p>Event row 1</p>
        <p>Event row 2</p>
        <p>Event row 3</p>
        <p>Can't even see me (in some cases)</p>
      </div>
    );
  }, []);

  const [events] = useState([
    {
      start: "2022-03-29T07:00",
      end: "2022-03-29T13:00",
      title: "07:00 - 13:00",
      resource: 1,
    },
    {
      start: "2022-03-29T07:00",
      end: "2022-03-29T13:00",
      title: "07:00 - 13:00",
      resource: 1,
    },
    {
      start: "2022-03-29T07:00",
      end: "2022-03-29T13:00",
      title: "07:00 - 13:00",
      resource: 1,
    },
    {
      start: "2022-03-29T12:00",
      end: "2022-03-29T18:00",
      title: "12:00 - 18:00",
      resource: 1,
    },
    {
      start: "2022-03-29T12:00",
      end: "2022-03-29T18:00",
      title: "12:00 - 18:00",
      resource: 1,
    },
    {
      start: "2022-03-29T07:00",
      end: "2022-03-29T13:00",
      title: "07:00 - 13:00",
      resource: 1,
      other: true,
    },
    {
      start: "2022-03-29T07:00",
      end: "2022-03-29T13:00",
      title: "07:00 - 13:00",
      resource: 1,
      other: true,
    },
    {
      start: "2022-03-29T07:00",
      end: "2022-03-29T13:00",
      title: "07:00 - 13:00",
      resource: 1,
      other: true,
    },
  ]);

  const staff = [
    {
      id: 1,
      name: "Ryan",
      color: "#e20000",
      title: "Cloud System Engineer",
      img: "https://img.mobiscroll.com/demos/m1.png",
    },
  ];

  return (
    <div className="day-calendar">
      <Eventcalendar
        view={view}
        data={events}
        resources={staff}
        theme="ios"
        themeVariant="light"
        renderScheduleEvent={renderEvent}
        dragToMove={true}
        dragToResize={true}
        showControls={false}
        showToday={false}
        selectedDate="2022-03-29T12:00:00"
      />
    </div>
  );
};

export default Calendar;
