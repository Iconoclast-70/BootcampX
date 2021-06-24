const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

pool.query(`
SELECT students.id AS student_id, students.name AS student_name, cohorts.name
FROM students
JOIN cohorts ON cohorts.id = students.cohort_id
WHERE cohorts.name LIKE $1
LIMIT $2;
`,[ `%${process.argv[2]}%`, process.argv[3]])
.then(res => {
  console.log(res.rows);
  pool.end();
})
.catch(err => console.error('query error', err.stack));

