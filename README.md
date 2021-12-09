# Yet Another Angular Boilerplate

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.0.4.
[![license](https://img.shields.io/github/license/MatiasProietti/yet-another-angular-boilerplate)](https://choosealicense.com/licenses/mit/) ![node](https://img.shields.io/badge/node-%3E%3D16.13-brightgreen) ![angular](https://img.shields.io/badge/angular-13.0.x-brightgreen)

## todo

- [ ] Improve readme
- [x] Add and configure ESLint and Prettier
- [x] Configure nvm, vscode and TS configurations
- [x] Add and configure Angular Material and bootstrap
- [ ] Add Authentication
- [ ] Add fake/mock backend

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
