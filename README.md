Task Manager 📝
Pre-requisitos 📋
Antes de comenzar, asegúrate de tener instaladas las siguientes herramientas:

Angular 16
.NET 6
MySQL Workbench
Visual Studio Code
Visual Studio
Git (para clonar el repositorio)
📌 Importante: Clona la rama "local", ya que en esta se ha configurado el entorno de desarrollo local.

Instalación 🔧
1️⃣ Configuración del Frontend
Abre una terminal y navega hasta la carpeta del frontend:
sh
Copiar
Editar
cd task-manager/front
Instala las dependencias:
sh
Copiar
Editar
npm install
Inicia el servidor de desarrollo:
sh
Copiar
Editar
ng serve -o
2️⃣ Configuración del Backend
Abre Visual Studio.
Carga la solución del backend:
Abre el archivo taskManagerClient.sln ubicado en:
sh
Copiar
Editar
task-manager/back/taskManagerClient
Ejecuta el proyecto desde Visual Studio.
Configuración de MySQL Workbench
1️⃣ Modificar la conexión a la base de datos
Abre el archivo de configuración:
sh
Copiar
Editar
task-manager/back/taskManagerClient/appsettings.Development.json
Edita la cadena de conexión en el apartado "DefaultConnection" según tu configuración local:
json
Copiar
Editar
"DefaultConnection": "server=localhost;userid=root;password=12345;database=TaskManagerDB;"
📌 Asegúrate de reemplazar userid y password con tus credenciales de MySQL.
2️⃣ Configurar la base de datos en MySQL Workbench
Abre MySQL Workbench y crea una nueva conexión con los siguientes parámetros:

Hostname: localhost
Username: root
Port: 3306
Password: 12345 (o la que tengas configurada)
Ejecuta el script SQL para crear la base de datos:

Abre MySQL Workbench y ejecuta el archivo TaskManagerDB.sql ubicado en:
sh
Copiar
Editar
task-manager/dataBase
¡Listo! 🎉
Ahora puedes utilizar la aplicación en tu entorno local. 🚀
