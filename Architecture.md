app.controller.spec.ts -> for testing controllers
app.controller.ts -> for controllers.
app.modules.ts -> module and controllers , providers details. (root module)
app.services.ts -> business logic called by controllers
main.ts -> entry point of application, execution starts from here.


my-nest-learning
│
├── dist/ -> for distribution that we have to take to production site removing every    extra building dependency or any extra or unnecessary utilities for production purpose.
│
├── node_modules/ -> all the packages that we need for project , auto-generated
│
├── src/ src -> source code file 
│   ├── app/
│   │   ├── users/
│   │   │   ├── users.controller.ts
│   │   │   ├── users.service.ts
│   │   │   ├── users.module.ts
│   │   │   └── dto/
│   │   │
│   │   └── auth/
│   │       ├── auth.controller.ts
│   │       ├── auth.service.ts
│   │       ├── auth.module.ts
│   │       └── dto/
│   │
│   ├── main.ts
│   ├── app.module.ts
│   ├── app.controller.ts
│   ├── app.service.ts
│   └── app.controller.spec.ts
│
├── test/ -> for testing
│
├── package.json -> details (most important)
├── package-lock.json -> details of dependencies and sub dependencies
├── tsconfig.json -> how typescript must be compiled
├── tsconfig.build.json -> used at build time, while compiling optimized typescript
├── nest-cli.json -> reads commands of cli
├── eslint.config.mjs -> defining nestjs rules
├── .gitignore -> list of files that should not be tracked by git
├── .prettierrc -> defining formatting rules
├── README.md -> documentation
└── Architecture.md