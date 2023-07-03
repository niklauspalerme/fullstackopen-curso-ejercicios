# fullstackopen-curso-ejercicios

# Ejercicio 1-3-anecdotas

- Se utiliza la función Object.keys()
- La utlización del reduce() para comparar valores
- Como calcular un numero Ramdon

# Ejercicio 2A -courseInfo

- Se utiliza reduce() para sumar los valores de una propiedad del array de objestos
- Se factorizaron Componentes en diferentes files
- Se renderizaron componentes usando map()

# Ejercicio Part 2B - Phonebook

- Se utilizo Inputs para capturar valores escritos
- Formularios para agregalos a un state global
- Un boton default sin controlador ya que el Form actua como controlador
- Se renderizo una colección de objetos y se agrego nuevos elemtnos
- Se utilizo el metodo **filter()** para filtrar el array de objetos
- Se utilizo el metodo **includes()**  ver si existia xs valor escrito en el input
- Se refactorizo en 3 Componentes

# Ejercicio Part 2C - Country

- Utilizamos **axios** para poder obtener data de una api
- Usamos el **useEffect** para poder agarrar los datos obtenidos del **axios** y actualizar el state global
- Se utilizo los Inputs para poder filtar los valores del State Global usando un controlador de evento **onChange**
- Se utilizo un state como flag para poder indicar cuando renderizar o no renderizar un componente á traves del controlador de evento del button **onClick**

# Ejercicio Part 2d - Phonebook

- Instalamos una dependencia para simular una api local: **npm i -g json-server** 
    - Creamos un **db.json** como base de data de nuestra api local
    -  Lo ejecutamos con el comando:  **npx json-server --port 3001 --watch db.json**
    - Modificamos el **package.json** para que se ejecute con el comando **npm run server**
- Empezamos a refactorizar las dependencias de axios en **services/personasController.js**:
    - Usamos **axios** metodos GET, PUT, POST, DELETE
    - La exportamos para usarla en los controladores de enventos del **App.js (Componente Principal)** 
- Utilizamos las siguienes funciones **map(), find(), includes(), toLowerCase(), reduce(), filter()**
- Utilizamos un **Form** con sus intputs y buttons
- Utilizamos los pop-up **window.confirm()**

# Ejercicio Part 2e - Phonebook

- Corremos los 2 comandos para que funcione la app:
    - **npm run ser**
    - **npm start**
- Se crea un componente llamado **Notificacion.js** donde va manejar y mostrar los mensajes de adventencia 
- Se crea un state en **index** para que maneje los mensajes de creado, update y delete:
    - **const [message, setMessage] =useState('')**
    - El controlador **handleForm** controla los states **create,update**
    - El controlador **handleDelete** controla el state **delete**

    
