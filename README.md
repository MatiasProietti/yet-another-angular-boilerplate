# Yet Another Angular Boilerplate

[![license](https://img.shields.io/github/license/MatiasProietti/yet-another-angular-boilerplate)](https://choosealicense.com/licenses/mit/) ![node](https://img.shields.io/badge/node-%3E%3D16.13-brightgreen) ![angular](https://img.shields.io/badge/angular-13.0.x-brightgreen)

## todo

- [x] Improve readme
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
  - [x] Responsive
  - [ ] Password Entropy
  - [x] Loading Spinner
  - [x] Backend connection
  - [x] Notifications
  - [x] Response handling
  - [ ] Unit tests
  - [ ] e2e tests
  - [ ] Refactor the form section, use new features available in Angular 14
  - [ ] Add tooltips
- [x] Fake/mock backend
- [ ] Optimize assets
- [ ] Tests
- [ ] Loading spinner
- [ ] Error pages (404, 500, etc.)
- [x] Notifications
- [x] JWT Interceptor
- [x] Error Interceptor
- [ ] Themes
  - [x] Service
  - [ ] Dark Theme
  - [x] Light Theme
  - [ ] Refactor color palette
  - [ ] Make color variables available in css and ts
- [ ] Unsubscribe onDestroy (performance)
- [ ] Refactor CSS where !important is used
- [x] Update to Angular 14
- [x] Update libraries
- [ ] Refactor html/css (grid and responsive elements)
- [ ] Move reusable components/modules to a library

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

Other folders might be added if needed. For example: `constants`, `pipes`, `decorators`, `directives`, `interfaces`.

## Why only 1 branch?

I'm currently working on the first feature of this project. As I'm working alone and there isn't a working feature or release yet I didn't find it useful to use an empty main branch with a separated feature branch for the auth part (first feature).
After finishing the Auth feature I will start working with git flow, github flow or trunk-based development.

## The last commit was X days/months ago, is this project abandonded?

### Short answer
The project is not dead, I work on it during my free time. The amount of time I can spend on it varies a lot because of my job, other projects/hobbies and university.

### Long answer
The project is not dead, it is very important to me because it allows me to learn new things and rethink what I already know. I do a lot of research and analysis to make sure my decisions are correct or at least informed rather than arbitrary. There may be times where there are 0 commits being pushed, this doesn't mean the project is dead, this means that I'm busy with other responsibilities and/or I'm doing research/analysis before my next commit.


## How can I contribute?

Feel free to contribute creating issues and/or PRs. The project is in an early stage and I didn't take the time to make templates for PR or issues so feel free to use any format.

### New features
When it comes to new features I'm only accepting suggestions/requests.

### Suggestions, refactors, improvements in code, style, etc.
Every issue/PR that improves the current code is welcomed, I'm a person that loves to iterate over the same code to keep up to date with best practices and updates.
