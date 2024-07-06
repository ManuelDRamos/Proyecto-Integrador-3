interface ScheduleTurnDto {
  userId: number;
  date: Date;
  time: string;
  status: "confirmed" | "cancelled";
  description: string;
}

export default ScheduleTurnDto;
