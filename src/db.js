import pg from 'pg';

export const pool = new pg.Pool({
  user: 'postgres',
  host: 'localhost',
  password: 'blackops3x3l0n',
  database: 'nodepg',
  port: '5432',
});

pool.query('SELECT NOW()').then((result) => {
  console.log(result);
});
