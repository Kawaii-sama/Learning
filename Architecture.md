app.controller.spec.ts :-> for testing controllers


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
├── test/
│
├── package.json
├── package-lock.json
├── tsconfig.json
├── tsconfig.build.json
├── nest-cli.json
├── eslint.config.mjs
├── .gitignore
├── .prettierrc
├── README.md
└── Architecture.md