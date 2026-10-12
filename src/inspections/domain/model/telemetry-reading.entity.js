/**
 * @summary TelemetryReadingEntity represents a telemetry reading for a machinery in a pit section.
 * @author Andre Sebastian Quispe Almonacid
 */

export class TelemetryReadingEntity {
    constructor(
    id= '',
    machineryCode= '',
    modelId= 0,
    pitSectionId= 0,
    OperatingHours= 0,
    enginetemperatureC= 0,
    OilPressurePsi = 0,
    alertTriggered= false,
    registeredAt = ''

    )
    {
        this.id = id;
        this.machineryCode = machineryCode;
        this.modelId = modelId;
        this.pitSectionId = pitSectionId;
        this.OperatingHours = OperatingHours;
        this.enginetemperatureC = enginetemperatureC;
        this.OilPressurePsi = OilPressurePsi;
        this.alertTriggered = alertTriggered;
        this.registeredAt = registeredAt;
    }
}