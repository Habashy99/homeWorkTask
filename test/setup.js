const db = require("../src");

before(async () => {
  try {
    await db.init();
    console.error('Successfully connected to the database.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
});

after(async () => {
  try {
    await db.deinit();
    console.error('Successfully disconnected from the database.');
  } catch (error) {
    console.error('Unable to disconnect from the database:', error);
  }
});
