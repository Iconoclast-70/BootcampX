const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

pool.query(`
  SELECT DISTINCT teachers.name as teacher,
  cohorts.name as cohort, COUNT(assistance_requests.*) AS total_assistances
  FROM teachers
  JOIN assistance_requests ON teachers.id = assistance_requests.teacher_id
  JOIN students ON assistance_requests.student_id = students.id
  JOIN cohorts ON cohorts.id = students.cohort_id
  WHERE cohorts.name = $1
  GROUP BY teachers.name, cohorts.name
  ORDER BY teacher;
`, [process.argv[2]])
.then(res => {
  console.log(res.rows);
  pool.end();
})
.catch(err => console.error('query error', err.stack));


