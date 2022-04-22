
const { expect } = require('chai');
const TrackingRecord = require('../src/TrackingRecord');


describe('The homework-task canary spec', () => {
  it('works', async () => {
    expect(true).to.equal(true);
  });
});

describe('TrackingRecord DAO spec', () => {
  describe('TrackingRecord.getAll spec', () => {
    it('fetches all tracking records', async () => {
      const records = await TrackingRecord.getAll();
      expect(records).to.be.an('Array');
      expect(records).to.have.lengthOf(250);
    });

    it('fetches (n) tracking records', async () => {
      const n = 100;
      const records = await TrackingRecord.getAll(n);
      expect(records).to.be.an('Array');
      expect(records).to.have.lengthOf(n);
    });
  });

  describe('TrackingRecord.fromId spec', () => {
    it('fetches a tracking record with the given id', async () => {
      const id = 1;
      const record = await TrackingRecord.fromId(id);
      expect(record).to.not.be.undefined;
      expect(record.id).to.equal(id);
    });

    it('throws an error if no tracking record with the given id exists in the db', async () => {
      try {
        await TrackingRecord.fromId(5000);
      } catch (err) {
        expect(err.message).to.match(/Record not found/);
      }
    });
  });
});