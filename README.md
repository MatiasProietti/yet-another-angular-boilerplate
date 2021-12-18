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
  - [ ] Confirm Email
  - [ ] Pending Confirmation
  - [ ] Logout
  - [ ] Service
  - [ ] Auth Guard
  - [ ] Model
  - [ ] Responsive
- [ ] Add fake/mock backend
- [ ] Optimize assets
- [ ] Tests

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
