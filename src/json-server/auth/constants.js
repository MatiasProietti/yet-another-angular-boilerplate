var config = function (f) {
  return {
    CONFIG: {
      JWT_EXPIRES_IN: "365 days",
      JWT_SECRET_KEY: "secret",
    },
    ROUTES: {
      login: {
        methods: ["POST"],
        exec: f.login,
      },
      register: {
        methods: ["POST"],
        exec: f.register,
      },
      "forgot-password": {
        methods: ["POST"],
        exec: f.forgotPassword,
      },
      "reset-password": {
        methods: ["POST"],
        exec: f.resetPassword,
      },
      "change-password": {
        methods: ["POST"],
        exec: f.changePassword,
      },
      "confirm-email": {
        methods: ["POST"],
        exec: f.confirmEmail,
      },
      "resend-email": {
        methods: ["POST"],
        exec: f.resendEmail,
      },
    },
  };
};
module.exports = config;
