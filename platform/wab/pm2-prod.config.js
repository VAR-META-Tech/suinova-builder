const DOMAIN = "https://suinova.var-meta.com";
const BACKEND_ONLY = process.env["PM2_BACKEND_ONLY"];

function getCodegenHost() {
  return `${DOMAIN}/api`;
}

module.exports = {
  apps: [
    {
      name: "suinova-backend",
      script: "yarn",
      args: ["backend"],
      log_date_format: "HH:mm:ss.SSS",
      env: {
        BACKEND_PORT: 5004,
        debug: 1,
        REACT_APP_DEFAULT_HOST_URL: `${DOMAIN}/api/static/host.html`,
        CODEGEN_HOST: getCodegenHost(),
        SOCKET_HOST: `${DOMAIN}/socket`,
        REACT_APP_CDN_URL: DOMAIN,
        REACT_APP_PUBLIC_URL: DOMAIN,
        INTEGRATIONS_HOST: DOMAIN,
        ENABLED_GET_EMAIL_VERIFICATION_TOKEN: true,
        DISABLE_BWRAP: "1",
        DATABASE_URI:
          "postgresql://postgres:rootpassword@192.168.1.101:31013/wab",
        SESSION_SECRET: "asdfasdf",
      },
      interpreter: "none",
    },
    {
      name: "suinova-socket-server",
      script: "yarn",
      args: ["socket-server"],
      wait_ready: true,
      time: true,
      env: {
        SOCKET_PORT: 5020,
      },
      node_args: ["--max-old-space-size=2000"],
      interpreter: "none",
      exec_mode: "cluster",
      instances: 1,
      merge_logs: true,
    },
    ...(BACKEND_ONLY
      ? []
      : [
          //   {
          //     name: "suinova-wab-watch-css",
          //     script: "yarn",
          //     args: ["watch-css"],
          //     exec_mode: "fork_mode",
          //     autorestart: false,
          //     interpreter: "none",
          //   }
          //   ,
          //   {
          //     name: "suinova-sub-watch",
          //     script: "yarn",
          //     args: ["watch"],
          //     cwd: "../sub",
          //     exec_mode: "fork_mode",
          //     autorestart: false,
          //     interpreter: "none",
          //   },
          // {
          //   name: "suinova-frontend",
          //   script: "yarn",
          //   args: ["start"],
          //   exec_mode: "fork_mode",
          //   autorestart: false,
          //   interpreter: "none",
          //   env: {
          //     PORT: 5003,
          //   },
          // }
          //   ,
          //   {
          //     name: "suinova-host-server",
          //     script: "yarn",
          //     args: ["host-server"],
          //     exec_mode: "fork_mode",
          //     autorestart: false,
          //     interpreter: "none",
          //   },
        ]),
  ],
};
