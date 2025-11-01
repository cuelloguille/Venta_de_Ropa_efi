# 🛍️ Sistema de Gestión de Inventario y Ventas de Ropa
Este es el backend del sistema de gestión de ventas e inventario de ropa, construido con Node.js, Express y Sequelize (MySQL/MariaDB)
## .🚀 Inicio Rápido
### Prerrequisitos
Asegúrate de tener instalado lo siguiente en tu sistema:
- Node.js (versión LTS recomendada)
- npm (Node Package Manager) o Yarn
- MySQL o MariaDB (servidor de base de datos)
---
#### 1. Clonar el Repositorio
> git clone https://docs.github.com/es/repositories/creating-and-managing-repositories/quickstart-for-repositories
cd Venta_de_Ropa_efi/back
#### 2. Configurar el EntornoCrea un archivo llamado .env en la raíz del proyecto y configúralo con tus credenciales de base de datos y JWT
> .env\
> --- Configuración del Servidor ---
PORT=4000
JWT_SECRET=TU_CLAVE_SECRETA_PRINCIPAL\
JWT_SECRET_RESET=TU_CLAVE_SECRETA_PARA_RESET_PASS\
URL del Frontend (Necesaria para los enlaces de recuperación de contraseña)\
FRONTEND_URL=http://localhost:3000\
Configuración de la Base de Datos (MariaDB/MySQL) ---\
DB_DIALECT=mysql\
DB_NAME=tiendaDB\
DB_USER=admin\
DB_PASSWORD=tucontrasena  # Usa la contraseña que configuraste en MariaDB\
DB_HOST=localhost
#### 3. Instalar DependenciasBashnpm install
> o yarn install
#### 4. Preparar la Base de Datos
Antes de iniciar, debes asegurarte de que tu servidor MySQL/MariaDB esté corriendo y crear la base de datos:\
    * Conéctate a tu consola de MariaDB/MySQL:

     Bash
    sudo mysql -u root -p
     Crea la base de datos:
     SQLCREATE DATABASE tiendaDB;
     Otorga permisos al usuario admin (si aún no lo has hecho):
    SQLGRANT ALL PRIVILEGES ON tiendaDB.* TO 'admin'@'localhost' IDENTIFIED BY '1234';
    FLUSH PRIVILEGES;
    EXIT;
#### 5. Levantar el Servidor
Modo Desarrollo\
El script de inicio también ejecuta sequelize.sync({ alter: true }), lo que creará todas las tablas la primera vez que se ejecute.
> Bash\
npm start

Deberías ver la confirmación:
> Base de datos sincronizada ✅\
Servidor en http://localhost:4000

Modo Producción (con PM2)\
Para mantener la aplicación corriendo en segundo plano:
> Bash# \
Si no lo tienes: npm install -g pm2\
pm2 start index.js --name "tienda-backend"\
pm2 save\
pm2 startup # (Para configurar el inicio automático)

---

### 🚪 Endpoints de la API
La API base es http://localhost:4000. Todas las rutas protegidas requieren un Authorization: Bearer <token>.\
#### Autenticación y Usuarios
| Método | Endpoint | Descripción | Seguridad |
| :--- | :--- | :--- | :--- |
| POST | /users/register | Registro de nuevos usuarios (admin/vendedor). | Pública |
| POST | /users/login | Autenticación y obtención de JWT. | Pública |
| GET | /users/profile | Obtiene los datos del usuario autenticado. | auth |
| POST | /users/forgot-password | Envía email con token de restablecimiento. | Pública |
| POST | /users/reset-password | Restablece la contraseña usando el token. | Pública |

---
 
 ### 📦 Estructura de la Base de Datos
 El sistema utiliza MariaDB/MySQL con Sequelize como ORM y consta de las siguientes tablas, con sus respectivas relaciones:
 * users: Almacena credenciales, roles y estado.
 * clothes: El inventario de productos.
 * sales: El registro de cada transacción.
 * sales_details: Los ítems que componen cada venta (relación muchos a muchos implícita).

 ---

 ### ☁️ Deployment
 Este backend está configurado para un deployment en la nube.
 * Backend: Railway o Render.
 * Base de Datos: MySQL en Railway o PlanetScale.
 * Frontend (URL en .env): Vercel o Netlify.

 ---
### 👤 Desarrolladores del Proyecto

Este proyecto fue desarrollado como parte del Examen Final Integrador (EFI) de programacion 3 por:

* **GUILLERMO CUELLO** - backend 
* **BRUNO SANCHEZ** - backend 
* **AGOSTINA BRINGAS** - frontend 
* **MICAELA CORTEZ** - frontend 

---
