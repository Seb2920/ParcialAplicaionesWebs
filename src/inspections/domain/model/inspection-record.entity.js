/**
 * @summary InspectionRecordEntity represents an inspection record for a machinery in a pit section.
 * @author Andre Sebastian Quispe Almonacid
 */

export class InspectionRecordEntity {
    constructor(id= '', machineryCode ='',  inspectorName ='', status ='', notes='', inspectedAt ='', maxOperatingHours = 0, inspectionResult = '') {
        this.id = id;
        this.machineryCode = machineryCode;
        this.inspectorName = inspectorName;
        this.status = status;
        this.inspectionResult = inspectionResult;
        this.notes = notes;
        this.inspectedAt = inspectedAt;
        this.maxOperatingHours = maxOperatingHours;
    }
}