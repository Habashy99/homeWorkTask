
# Homework Task

With this task, you'll be writing some code to manipulate data in the db, as well as, some tests to verify your code does what it is supposed to do.

## To Run The Project

1. Run `npm install`
2. Run database migrations `sequelize db:migrate`
3. Fill the database with some seed data `sequelize db:seed:all`
4. Verify the project runs as expected `npm test`, if your project is set-up correctly, you should see 2 passing and 3 failing tests

# What is this project?

This is a simple app, that runs an sqlite database. The database contains only 1 table, namely; 'tracking_records'. Each row in this table contains the following columns:
- `id` (primary key)
- `title` (not unique)
- `type` (can be one of ['food', 'activity', 'cost'])
- `value` (string, if `type` is 'food' or 'activity' then you can expect `value` to contain some 'food' or 'activity' value. If `type` is 'cost' then `value` would be a number in string format)
- `createdAt` (the date when the record was inserted into the database)
- `updatedAt` (the date when the record was last updated)

check the migration file for more information on the table and its columns, e.g. which columns can be null, etc.

## Tasks
1. Fix code so that the all written tests pass
2. Extend the functionality already-defined in TrackingRecord.js, so that TrackingRecord supports the following:
    - Fetching tracking records with a given type. Your implementation shouldn't throw if unable to retrieve any records
    - Fetching tracking records created between two given dates. Your implementation shouldn't throw if unable to retrieve any records 
    - Deleting a given TrackingRecord instance's record from db
    - Adding a new TrackingRecord record to the db
    - Generating some statistical report exported to .txt file in the project directory


## Things to keep in mind
1. Please commit your work gradually, I would like to check your commit history :)
2. The functionality requested above is somewhat vague. Use the approach you think is best in order to implement it, e.g. for one functionality, it might make sense to implement a class method, whereas for another one, you could opt for a static method. Maybe, you'd even consider refactoring existing functions instead of adding a new one for each requested functionality.
3. For each new piece of functionality you add, you have to add tests to verify that it works as expected.   