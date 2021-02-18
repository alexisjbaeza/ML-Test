# Test Mercado Libre

Este proyecto es un test práctico para optar a ser desarrollador de Mercado Libre. 

El stack para construir la aplicación consta de Angular para el Front y Node con Express para el Back. 

Con la finalidad de optimizar el SEO del sitio, se opta por realizar un SSR en base a Angular Universal.


## Consideraciones
Se incluyen atributos adicionales en los endpoints (ej: `state_name`), con tal de que las vistas de la app web sean lo más parecidas posible a lo solicitado.

Se realiza la implementación de las Breadcrumbs con tal de que estas también sean funcionales. Para ello se implementa la búsqueda de items de acuerdo a su categoría, realizando una nueva consulta a la API de Mercado Libre y se reutiliza código de las funciones originalmente solicitadas. 

## Iniciar servidor
Ejectuar desde la línea de comandos, en el directorio raíz del proyecto `npm install` con tal de instalar las dependencias necesarias.

Verificar que no esté ocupado el puerto 4200. 

Ejecutar comando `npm run dev:ssr`para iniciar el servidor. 

Una vez finalizada la inicialización del servidor, dirigirse a http://localhost:4200 para visualizar la app web.

