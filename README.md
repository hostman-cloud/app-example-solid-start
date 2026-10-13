# SolidStart

Example of a [SolidStart](https://start.solidjs.com/) application that can be deployed to **Hostman** without configuration.

:tada: [Demo]()

:rocket: [Create your Apps](https://hostman.com/my/apps/create)

:books: [Hostman Apps Documentation](https://hostman.com/docs/app-platform/backend-apps/)

## Deployment settings

The app is deployed as a frontend: Nitro with the `static` preset prerenders pages to HTML (see `vite.config.ts`).

| Parameter       | Value            |
| --------------- | ---------------- |
| Framework       | SolidStart       |
| Node.js version | 24               |
| Build command   | `npm run build`  |
| Build directory | `.output/public` |

Server-side rendering example: [app-example-solid-start-ssr](https://github.com/hostman-cloud/app-example-solid-start-ssr).

## <a name="dev"></a>Running locally

```bash
# install dependencies
npm install

# run in development mode with file watching
npm run dev

# build for production with minification
npm run build

# preview the production build locally
npm run preview
```

SolidStart 2 officially supports Node.js 24 and newer.
