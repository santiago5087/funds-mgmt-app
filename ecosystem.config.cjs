module.exports = {
  apps: [
    {
      name: 'funds-api',
      script: './node_modules/.bin/json-server',
      args: 'db.json --port 3000',
      watch: false,
      instances: 1,
      autorestart: true,
      max_restarts: 10,
      restart_delay: 2000,
      env: {
        NODE_ENV: 'development',
        PORT: 3000,
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: 3000,
      },
      error_file: './logs/api-error.log',
      out_file: './logs/api-out.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss',
    },
  ],
};
