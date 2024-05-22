const today = new Date().toISOString().split("T")[0];
const fastDate = getPastDate(3);
const futureDates = getFutureDates(12);
const dates = [fastDate, today].concat(futureDates);

function getFutureDates(numberOfDays: number) {
  const array: string[] = [];
  for (let index = 1; index <= numberOfDays; index++) {
    let d = Date.now();
    if (index > 8) {
      // set dates on the next month
      const newMonth = new Date(d).getMonth() + 1;
      d = new Date(d).setMonth(newMonth);
    }
    const date = new Date(d + 864e5 * index); // 864e5 == 86400000 == 24*60*60*1000
    const dateString = date.toISOString().split("T")[0];
    array.push(dateString);
  }
  return array;
}
function getPastDate(numberOfDays: number) {
  return new Date(Date.now() - 864e5 * numberOfDays)
    .toISOString()
    .split("T")[0];
}

export const agendaItems = [
  {
    title: dates[0],
    data: [{ hour: "12am", duration: "1h", title: "Vuelo BS AS " }],
  },
  {
    title: dates[1],
    data: [
      { hour: "4pm", duration: "1h", title: "Vuelo N 9725" },
      { hour: "5pm", duration: "1h", title: "Vuelo N 6725" },
    ],
  },
  {
    title: dates[2],
    data: [
      { hour: "1pm", duration: "1h", title: "Vuelo Cordoba" },
      { hour: "2pm", duration: "1h", title: "Vuelo Sgo del Estero" },
      { hour: "3pm", duration: "1h", title: "Vuelo Salta" },
    ],
  },
  {
    title: dates[3],
    data: [{ hour: "12am", duration: "1h", title: "Vuelo bautismo" }],
  },
  {
    title: dates[4],
    data: [{}],
  },
  {
    title: dates[5],
    data: [
      { hour: "9pm", duration: "1h", title: "Vuelo plactica" },
      { hour: "10pm", duration: "1h", title: "Vuelo examen" },
      { hour: "11pm", duration: "1h", title: "Instructor: Sofia" },
      { hour: "12pm", duration: "1h", title: "Turno Saetta" },
    ],
  },
  {
    title: dates[6],
    data: [{ hour: "12am", duration: "1h", title: "Vuelo" }],
  },
  {
    title: dates[7],
    data: [{}],
  },
  {
    title: dates[8],
    data: [
      { hour: "9pm", duration: "1h", title: "Vuelo plactica" },
      { hour: "10pm", duration: "1h", title: "Instructor" },
      { hour: "11pm", duration: "1h", title: "Vuelo independiente" },
      { hour: "12pm", duration: "1h", title: "Vuelo. Instructor: Juan" },
    ],
  },
  {
    title: dates[9],
    data: [
      { hour: "1pm", duration: "1h", title: "Vuelo" },
      { hour: "2pm", duration: "1h", title: "Vuelo plactica" },
      { hour: "3pm", duration: "1h", title: "Turno Saetta" },
    ],
  },
  {
    title: dates[10],
    data: [{ hour: "12am", duration: "1h", title: "Vuelo instructor: Juan" }],
  },
  {
    title: dates[11],
    data: [
      { hour: "1pm", duration: "1h", title: "Turno Saetta" },
      { hour: "2pm", duration: "1h", title: "Vuelo plactica" },
      { hour: "3pm", duration: "1h", title: "Turno Saetta" },
    ],
  },
  {
    title: dates[12],
    data: [{ hour: "12am", duration: "1h", title: "Turno Saetta" }],
  },
  {
    title: dates[13],
    data: [{ hour: "12am", duration: "1h", title: "Vuelo plactica" }],
  },
];

export function getMarkedDates() {
  const marked: any = {};

  agendaItems.forEach((item) => {
    // NOTE: only mark dates with data

    if (item.data && item.data.length > 0 && !item.data[0]) {
      marked[item.title] = { marked: false };
    } else {
      marked[item.title] = { marked: true };
    }
  });
  return marked;
}
