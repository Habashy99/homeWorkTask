const db = require('./index');

class TrackingRecord {
  constructor() {
    this.title = "";
    this.type = "";
    this.value = "";
  }

  static fromJSON(json) {
    new TrackingRecord();
    return new TrackingRecord(json);
  }

  static async getAll() {
    const records = await db.trackingRecord.findAll();
    return records.map(r => r.toJSON());
  }

  static async fromId() {
    const record = await db.trackingRecord.findByPk();
    return record.toJSON();
  }
}

module.exports = TrackingRecord;
