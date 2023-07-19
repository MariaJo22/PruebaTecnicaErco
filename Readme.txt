backend (node-express)
para inicializar el servicio de backendpruebatecnica, es necesario validar si se tiene la última versión de node (en caso de que no ejecutar npm install para las demás dependencias) y que el puerto 3001 no esté ocupado 
Conexión a mongo, para versiones superiores nodejs (v17.x) es necesario establecer conexión a mongo por medio de la IP 127.0.0.1 
para inicializar el proyecto se usa npm run dev 
una vez ejecutado se crea la base de datos y la colección por el orm de mongoose
para cargar la data se hace de forma manual 
una vez este inicializado abrir en el explorador la dirección http://localhost:3001

frontend(react)
para inicializar usar npm start y validar que el puerto 3000 este libre
una vez esto en el explorador se abre la dirección http://localhost:3000
