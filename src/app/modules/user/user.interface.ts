export interface IUser {
  name: string;
  role: string;
  password: string | number;
  studentID?: number;
  phoneNumber: number;
  email: string;
  employeeId?: string;
  isVerified: boolean;
}
