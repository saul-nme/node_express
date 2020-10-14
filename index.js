const port = 8085;
const express = require('express');
const bodyParser = require('body-parser');


const router = express();

// Parse application/x-www-form-urlencoded
router.use(bodyParser.urlencoded({ extended: false, }));

// Parse application/json
router.use(bodyParser.json());


// Hola mundo
router.get('/', (req, res) => {
   res.json({message: "hola"});
});


// Obtiene listado de los pedidos
router.get('/pedidos', (req, res) => {
   // Simulamos que obtuvimos una lista de pedidos en base de datos y regresamos al usuario
   const pedidos = [{
      "_id": "5f80f23391ef1c0012b9f776",
      "estatus": {
         "tipo":1,
         "nombre":"Pendiente"
      },
      "notas":"Urgente",
      "etiquetas":[],
      "total": 13292 ,
      "articulos":[
         {
            "_id":"5f80f23391ef1c0012b9f777",
            "articulo":"5f80a05fc601fb74b2d07874",
            "cantidad":3
         }, {
            "_id":"5f80f23391ef1c0012b9f778",
            "articulo":"5f80a05fc601fb74b2d07875",
            "cantidad":3
         }, {
            "_id":"5f80f23391ef1c0012b9f779",
            "articulo":"5f80a05fc601fb74b2d07876",
            "cantidad": 1
         },
      ],
      "cliente":"5f3d47ec6ed1ba21eef7eee2",
      "folio":"#1009",
      "createdDate": 1602286131734,
   }
   ]
   res.json({ok: true, pedidos})
});

// Crea un pedido
router.post('/pedidos', (req, res) => {
   // Obtiene datos del pedido desde el request 
   const { pedido } = req.body;
   console.table(pedido);
   // Una vez obtenido el pedido, hacer lo que se quiera con esos datos
   // ...
   // ...

   // Cuando se hayan hecho operaciones con los datos del pedido se regresa un 200 u otro estatus;
   // Puedes descomentar las respuestas para probar los diferentes estatus
   // res.status(500).json({ok: false, message: "Ha ocurrido un error en el servidor"})
   res.json({ok: true, message: "Pedido insertado correctamente"});
})

// Modifica un pedido
router.put('/pedidos/:id', (req, res) => {
   // Obtiene el id del pedido a ser modificado por el parametro :id
   const {id} = req.params
   // Obtiene los datos que se van modificar
   const { pedido } = req.body;

   console.table({id, pedido});

   // Una vez obtenido el pedido y el ID, hacer lo que se quiera con esos datos
   // ...
   // ...

   // Cuando se hayan hecho operaciones con los datos del pedido se regresa un 200 u otro estatus;
   // Puedes descomentar las respuestas para probar los diferentes estatus
   // res.status(500).json({ok: false, message: "Ha ocurrido un error en el servidor"})
   // res.status(404).json({ok: false, message: "Pedido no encontrado"})
   // res.status(400).json({ok: false, message: "El ID es requerido"})

   res.json({ok: true, message: "Pedido actualizado correctamente"});
}),

// Elimina un pedido
router.delete('/pedidos/:id', (req, res) => {
   // Obtiene el id del pedido a ser borrado por el parametro :id
   const {id} = req.params;

   // Una vez obtenido el pedido y el ID, hacer lo que se quiera con esos datos
   // ...
   // ...

   // Cuando se hayan hecho operaciones con los datos del pedido se regresa un 200 u otro estatus;
   // Puedes descomentar las respuestas para probar los diferentes estatus
   // res.status(500).json({ok: false, message: "Ha ocurrido un error en el servidor"})
   // res.status(404).json({ok: false, message: "Pedido no encontrado"})
   // res.status(400).json({ok: false, message: "El ID es requerido"})
   res.json({ok: true, message: "Pedido borrado correctamente"});
})



router.listen(port, () => {
   console.log(`Listen on port ${port}`);
});