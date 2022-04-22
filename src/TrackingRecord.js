const db = require('./index');

class TrackingRecord {
  constructor() {
    this.title = "";
    this.type = "";
    this.value = "";
  }
}

module.exports = TrackingRecord;
