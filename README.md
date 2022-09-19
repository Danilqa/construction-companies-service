# About

Company catalog service


# API

| Route        | Description                                                      |
|--------------|------------------------------------------------------------------|
| Companies    | `/companies?query=:query&specialities=:speciality1,:speciality2` |
| Specialities | `/specialities`                                                  |

# Getting started

1. `yarn install` - install the dependencies
2. `yarn dev` - start on the localhost at `3500` port

# Why do we have these dependencies?

* `fastify` - maintainable and fast web-framework with good api
* `@fastify/cors` - configures CORS on fastify

# Project structure

```
/config - files for configuration project modules
/src - files used by this application (modules, templates, logic)
    /assets - mock data
    /repository
    /model - domain entities
    /utils - helpers
    /env - sets of constants for the app environment
        env.ts
    server.tsx - the main app         
                 
package.json - project configuration, contains project information, dependencies and settings
yarn.log - file fixing specific dependency numbers
README.md
<other root configuration files> - for example, jest.config.ts, .gitignore, ...                                             
```
