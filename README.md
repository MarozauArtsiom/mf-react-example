# TBD

## Lerna

Lerna is dead, need to replace it https://betterprogramming.pub/lerna-is-officially-dead-long-live-monorepos-9853c80a7b0e?gi=74ba2a92c208

## Build

- Rebuild only what was changed (need for CI)
- Hard clean and rebuild (need for CI)

## Install

in root:

``npm run link` // TBD write link command in projects
`npm run bootstrap`

## Refactor plan

- [ ] Deprecate lerna
  - [ ] Replace with tool with tool from [list](https://betterprogramming.pub/lerna-is-officially-dead-long-live-monorepos-9853c80a7b0e?gi=74ba2a92c208)
  - [ ] make similar commands for all packages
    - build - should build project
    - serve - should start project on some port
  - [ ] whole project should run with one command
        `npm run bootstrap` - install all dependencies
        `npm run link:package` - link local packages
        `npm run serve` - start project
- [ ] One-web should has menu
- [ ] One-web app should import projects with module federation
- [ ] Research load projects with lazy loading for one-web?
- [ ] Add one more package for npm
- [ ] Add one more project in apps
