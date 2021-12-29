# Yet Another Angular Boilerplate

[![license](https://img.shields.io/github/license/MatiasProietti/yet-another-angular-boilerplate)](https://choosealicense.com/licenses/mit/) ![node](https://img.shields.io/badge/node-%3E%3D16.13-brightgreen) ![angular](https://img.shields.io/badge/angular-13.0.x-brightgreen)

## todo

- [ ] Improve readme
- [x] Add and configure ESLint and Prettier
- [x] Configure nvm, vscode and TS configurations
- [x] Add and configure Angular Material and bootstrap
- [ ] Authentication
  - [x] Login
  - [x] Register
  - [x] Forgot Password
  - [x] Reset Password
  - [x] Confirm Email
  - [x] Pending Confirmation
  - [x] Resend Email
  - [x] Change Password
  - [x] Service
  - [x] Auth Guard
  - [x] Model
  - [ ] Responsive
  - [ ] Password Entropy
  - [x] Loading Spinner
  - [x] Backend connection
  - [x] Notifications
  - [x] Response handling
- [x] Fake/mock backend
- [ ] Optimize assets
- [ ] Tests
- [ ] Loading spinner
- [ ] Error pages (404, 500, etc.)
- [ ] Unsubscribe onDestroy
- [ ] Tooltips
- [ ] Notifications
- [x] JWT Interceptor
- [x] Error Interceptor
- [ ] Themes
  - [x] Service
  - [ ] Dark Theme
  - [x] Light Theme

## Project Structure

```
.
└── src
    ├── app
    │   ├── shared (@shared)
    │   │   ├── components
    │   │   ├── services
    │   │   ├── models
    │   │   ├── modules
    │   │   └── helpers
    │   └── features (@features)
    │        └── <feature_name>
    │            ├── components
    │            ├── services
    │            ├── models
    │            ├── helpers
    │            └── pages
    ├── assets
    ├── environments (@environments)
    └── styles
        └── themes
```

Optional folders might be added in the future if needed. For example: `constants`, `pipes`, `decorators`, `directives`, `interfaces`.

## Why only 1 branch?

I'm currently working on the first feature of this project. As I'm working alone and there isn't a working feature yet I didn't find it useful to use an empty main branch with a separated feature branch for the auth part.
After finishing with the Auth feature I will start working with feature branches.
