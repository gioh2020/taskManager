## Tecnologías Utilizadas 🚀

### **Frontend**  
- **Angular 16**  
- **TypeScript**  
- **Bootstrap**  
- **NgRx (para manejo de estado)**  
- **Vercel (Hosting en producción)**  

### **Backend**  
- **.NET 6** (API RESTful)  
- **Entity Framework Core**  
- **Autenticación con JWT**  
- **Somee (Hosting en producción)**  

### **Base de Datos**  
- **MySQL RDS (AWS)**  

### **Motivación Detrás de la Arquitectura**
- Se eligió **Vercel** y **Somee** para el despliegue porque ofrecen planes gratuitos con límites razonables para proyectos personales.
- **AWS RDS** se utilizó para la base de datos porque aún se cuenta con la capa gratuita.

---
## Instalación y Configuración 🔧

### **Pre-requisitos** 📋
Antes de comenzar, asegúrate de tener instaladas las siguientes herramientas:

- **Node.js** y **npm** (para Angular)
- **Angular CLI**
- **.NET 6 SDK**
- **MySQL Workbench**
- **Visual Studio Code**
- **Visual Studio**
- **Git** (para clonar el repositorio)

📌 **Importante:** Clona la rama **"local"**, ya que en esta se ha configurado el entorno de desarrollo local.

### **1️⃣ Configuración del Frontend**
1. Clona el repositorio y navega a la carpeta del frontend:
   ```sh
   git clone https://github.com/gioh2020/taskManager.git
   cd taskManager/front
   ```
2. Instala las dependencias:
   ```sh
   npm install
   ```
3. Inicia el servidor de desarrollo:
   ```sh
   ng serve -o
   ```

### **2️⃣ Configuración del Backend**
1. Abre **Visual Studio**.
2. Carga la solución del backend:
   - Abre el archivo **taskManagerClient.sln** ubicado en:
     ```sh
     taskManager/back/taskManagerClient
     ```
3. Ejecuta el proyecto desde Visual Studio.

### **3️⃣ Configuración de MySQL Workbench**

#### **Modificar la conexión a la base de datos**
1. Abre el archivo de configuración:
   ```sh
   taskManager/back/taskManagerClient/appsettings.Development.json
   ```
2. Edita la cadena de conexión en el apartado `DefaultConnection` según tu configuración local:
   ```json
   "DefaultConnection": "server=localhost;userid=root;password=12345;database=TaskManagerDB;"
   ```
   📌 **Reemplaza `userid` y `password` con tus credenciales de MySQL.**

#### **Crear la base de datos**
1. Abre **MySQL Workbench** y crea una nueva conexión con los siguientes parámetros:
   - **Hostname:** `localhost`
   - **Username:** `root`
   - **Port:** `3306`
   - **Password:** `12345` (o la que tengas configurada)

2. Ejecuta el script SQL para crear la base de datos:
   - Abre MySQL Workbench y ejecuta el archivo **TaskManagerDB.sql** ubicado en:
     ```sh
     taskManager/dataBase
     ```

---
## **Endpoints Principales 📡**

### **Autenticación**
- `POST /api/auth/login` → Iniciar sesión.
- `POST /api/auth/register` → Registrar un nuevo usuario.

### **Tareas**
- `GET /api/tasks` → Obtener todas las tareas del usuario.
- `POST /api/tasks` → Crear una nueva tarea.
- `PUT /api/tasks/{id}` → Editar una tarea.
- `DELETE /api/tasks/{id}` → Eliminar una tarea.

📌 **Todas las rutas protegidas requieren autenticación con JWT.**

---
## **Pruebas y Debugging 🛠️**

Para probar la API, puedes usar **Postman** o **Swagger** en la URL donde se ejecuta el backend.

---
## **¡Listo! 🎉**
Ahora puedes utilizar la aplicación en tu entorno local. 🚀
