'use strict';
module.exports = (sequelize, DataTypes) => {
  var trackingRecord = sequelize.define('tracking_record', {
    title: DataTypes.STRING,
    type: DataTypes.STRING,
    value: DataTypes.TEXT,
  }, {});

  return trackingRecord;
};
