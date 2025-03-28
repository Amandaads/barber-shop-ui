export interface ScheduleAppointmentMonthResponse{
    year: number,
    month: number
    scheduleAppointments:ClientScheduleAppointementResponse[]
}

export interface ClientScheduleAppointementResponse{
    id: number
    day: number
    startAt: Date
    endAt: Date
    clienteId: number
    clientName: string
}

export interface SaveScheduleResponse{
    id: number
    startAt: Date
    endAt: Date
    clienteId: number
}

export interface SaveScheduleRequest{
    startAt: Date
    endAt: Date
    clienteId: number
}