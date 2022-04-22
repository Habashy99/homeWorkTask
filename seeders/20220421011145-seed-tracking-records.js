'use strict';

function createNTrackingRecords(n) {
  const food = ['dry', 'wet', 'BARF', 'supplement'];
  const activity = ['hike', 'swimming', 'fetch', 'obstacle_course'];
  const cost = Array.from(Array(50), (_) => `${Math.floor(Math.random() * 500)}`);

  const getRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];
  const supportedTypes = { food, activity, cost };

  const trackingRecords = [];

  const types = Object.keys(supportedTypes);

  for (let i = 0; i < n; i++) {
    const type = getRandom(types);
    const value = getRandom(supportedTypes[type]);

    trackingRecords.push({
      title: `tracking_record_${i % 5}`,
      type,
      value,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  }

  return trackingRecords;
}

module.exports = {
  up: async (queryInterface) => {
    const result = await queryInterface.bulkInsert('tracking_records', createNTrackingRecords(250), {});
    return;
  },
  down: async (queryInterface) => {
    return queryInterface.bulkDelete('tracking_records', null, {});
  }
};
