/**
 * @summary TelemetryReadingEntity represents a telemetry reading for a machinery in a pit section.
 * @author Andre Sebastian Quispe Almonacid
 */

export class TelemetryReadingEntity {
    constructor(
    id= 0,
    inspectionRecordId = 0,
    machineryCode= '',
    vibrationMmS= 0,
    enginetemperatureC= 0,
    OilPressurePsi = 0,
    alertTriggered= false,
    registeredAt = ''

    )
    {
        this.id = id;
        this.inspectionRecordId = inspectionRecordId;
        this.machineryCode = machineryCode;
        this.vibrationMmS = vibrationMmS;
        this.OperatingHours = OperatingHours;
        this.enginetemperatureC = enginetemperatureC;
        this.OilPressurePsi = OilPressurePsi;
        this.alertTriggered = alertTriggered;
        this.registeredAt = registeredAt;
    }
}