/**
 * @summary InspectionRecordEntity represents an inspection record for a machinery in a pit section.
 * @author Andre Sebastian Quispe Almonacid
 */

export class InspectionRecordEntity {
    constructor(id= '', machineryCode ='', pitSectionId=0,  inspectorName ='', status ='', notes='', inspectedAt ='', OperatingHours = 0) {
        this.id = id;
        this.pitSectionId = pitSectionId;
        this.machineryCode = machineryCode;
        this.inspectorName = inspectorName;
        this.OperatingHours = OperatingHours;
        this.status = status;
        this.notes = notes;
        this.inspectedAt = inspectedAt;

    }
}