enum status {
    ACTIVE = "Active",
    CANCELED = "Canceled",
    COMPLETED =  "Completed"
}


interface IAppointments {
    id: number;
    date: Date;
    time: string;
    status: status;
    description: string;
    UserId: number;
}


export default IAppointments;