export interface IBus {
  busType: "student" | "teacher" | "employee" | "officials";
  schedule: string;
  busNumber: number;
  day: "weekday" | "friday" | "saturday";
  location: "fromCampus" | "fromShohor";
  stopage?: string[];
}
