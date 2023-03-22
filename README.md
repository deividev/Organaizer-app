# Proyecto personal para controlar la distancia recorrida cada dia.

Este proyecto es una plantilla para crear aplicaciones web utilizando Vite, React, TypeScript, Sass, Storybook y Jest.

## Requisitos

Antes de comenzar a utilizar este proyecto, asegúrese de tener instalado Node.js en su máquina.

## Instalación

Para instalar las dependencias del proyecto, ejecute el siguiente comando en la raíz del proyecto:
    ```yarn install```

## Ejecución

Para ejecutar la aplicación, ejecute el siguiente comando:
   ```yarn dev```

Esto iniciará el servidor de desarrollo en http://localhost:3000.

## Compilación

Para compilar la aplicación, ejecute el siguiente comando:
    ```yarn build```

Esto generará una carpeta `dist` con los archivos compilados listos para ser desplegados en producción.

## Storybook

Para ejecutar Storybook, ejecute el siguiente comando:
    ```yarn storybook``` 

Esto iniciará el servidor de Storybook en http://localhost:6006.

## Jest

Para ejecutar las pruebas unitarias con Jest, ejecute el siguiente comando:
    ```yarn test``` 

## Tecnologías utilizadas

- [Vite](https://vitejs.dev/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Sass](https://sass-lang.com/)
- [Storybook](https://storybook.js.org/)
- [Jest](https://jestjs.io/)

## Estructura de archivos

    |-- src
    | |--styles
    | | |--abstract
    | | |--base
    | | |--components
    | | |--config
    | | |--layout
    | | |--theme
    | | |--mains.scss
    | |-- components
    | | |-- Componente.tsx
    | | |-- Componente.module.scss
    | | |-- __test__
    | | | |--Componente.test.tsx
    | |-- index.tsx
    |-- .storybook
    | |-- main.tsx
    |-- vite.config.ts
    |-- package.json
    |-- tsconfig.json
    |-- jest.config.js
    |-- README.md

- `src/components`: Carpeta donde se encuentran los componentes de la aplicación.
- `src/styles`: Carpeta donde se encuentran los stilos de la aplicación.
- `src/main.tsx`: Punto de entrada de la aplicación.
- `.storybook/main.js`: Configuración principal de Storybook.
- `.storybook/preview.js`: Configuración del entorno de Storybook.
- `vite.config.ts`: Configuración de Vite.
- `package.json`: Archivo de configuración de npm.
- `tsconfig.json`: Configuración de TypeScript.
- `jest.config.js`: Configuración de Jest.
- `README.md`: Archivo que estás leyendo en este momento.

## Contribuyendo

Si desea contribuir a este proyecto, puede hacerlo a través de Pull Requests o Issues en GitHub.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT. Consulte el archivo LICENSE para obtener más información.