export interface IBus {
  busType: "Student" | "Teacher" | "Employee" | "Teacher + Employee";
  schedule: string;
  busNumber: number;
  day: "Sunday to Thursday" | "Friday" | "Saturday";
  location: "fromcampus" | "fromtown" | "fromTerminal" | "fromCampusToTerminal";
  stopage?: string[];
}
