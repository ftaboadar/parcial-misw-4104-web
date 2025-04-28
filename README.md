# Parcial - MISW-4104-Web

## Descripción
Este proyecto fue desarrollado como parte de la evaluación práctica de la materia **MISW-4104-Web**. La aplicación en Angular tiene como objetivo listar vehículos de segunda mano en venta. Los vehículos son obtenidos a través de un servicio HTTP que consume datos externos de un archivo JSON. La aplicación incluye un formulario de inicio de sesión, una lista de vehículos y un conteo de vehículos por marca.

## Tecnologías Utilizadas
- **Angular** (última versión)
- **Bootstrap 5** (para el diseño de la tabla y otros componentes)
- **Jasmine** y **Karma** (para pruebas unitarias)
- **Git** y **GitHub** (para control de versiones)

## Requerimientos del Proyecto
1. **Módulo de Vehículos**: Un módulo que encapsule la lógica relacionada con la gestión de vehículos.
2. **Clase Vehículo**: Definición de la clase `Vehiculo` con los atributos necesarios (marca, línea, modelo, precio, kilometraje, año).
3. **Servicio HTTP**: Un servicio que consuma datos de una API externa para obtener el listado de vehículos.
4. **Componente de Listado de Vehículos**: Mostrar los vehículos en una tabla de Bootstrap, con las columnas de marca, línea y modelo. Además, al hacer clic en un vehículo, se muestra información adicional como el kilometraje, el color y la referencia.
5. **Conteo de Vehículos por Marca**: Modificar el componente para incluir dos líneas que muestren el número de vehículos de cada marca.
6. **Pruebas Unitarias**: Realizar pruebas unitarias para verificar el correcto funcionamiento del componente de listado.

## Flujo de la Aplicación

### 1. Inicio de sesión:
El inicio de sesión se realiza con las credenciales predeterminadas:
- **Usuario**: admin
- **Contraseña**: admin

Al ingresar correctamente, el usuario es redirigido a la página de listado de vehículos.

### 2. Listado de Vehículos:
Una vez autenticado, se mostrará una tabla con el listado de vehículos obtenidos desde la API externa. La tabla tiene las siguientes columnas:
- **Marca**: La marca del vehículo.
- **Línea**: La línea o modelo del vehículo.
- **Modelo**: El modelo del vehículo.

Además, cuando se hace clic en un vehículo, se muestra un panel lateral que incluye detalles adicionales como:
- **Kilometraje**
- **Color**
- **Referencia**

### 3. Conteo de Vehículos por Marca:
Al lado de la tabla, se muestra un conteo del número de vehículos por cada marca. Esto proporciona una visión rápida de cuántos vehículos de cada marca están disponibles en la lista.

## Estructura del Proyecto

```bash
parcial-misw-4104-web/
│
├── src/                         # Código fuente de la aplicación
│   ├── app/                     
│   │   ├── components/          # Componentes reutilizables
│   │   │   ├── vehicle-list/    # Componente para la lista de vehículos
│   │   │   └── vehicle-count/   # Componente para el conteo de vehículos
│   │   ├── models/              # Modelos de datos
│   │   │   └── vehicle.model.ts  # Definición de la clase Vehiculo
│   │   ├── services/            # Servicios para consumir datos externos
│   │   │   └── vehicle.service.ts
│   │   ├── app.module.ts        # Módulo principal de la aplicación
│   │   └── app.component.ts     # Componente raíz
│   ├── assets/                  # Archivos estáticos (imágenes, iconos)
│   ├── environments/            # Archivos de configuración por entorno
│   ├── index.html               # Página principal del proyecto
│   ├── main.ts                  # Punto de entrada de la aplicación
│   ├── styles.css               # Estilos globales
│   └── angular.json             # Configuración de Angular CLI
│
├── .gitignore                   # Archivos y carpetas a excluir de git
├── package.json                 # Dependencias y scripts del proyecto
├── tsconfig.json                # Configuración de TypeScript
└── README.md                    # Este archivo

