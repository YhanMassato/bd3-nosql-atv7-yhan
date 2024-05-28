const database = 'BD3-NoSQL-AtlasMongoDB-yhan';

const collection = 'bd3-nosql-atv7';

use(database);

// // Seleciona todos os valores maiores que 700
db['bd3-nosql-atv7'].find({"valor": {$gt:700}}, {"_id":0})

// // Seleciona todos os valores menores que 450
db['bd3-nosql-atv7'].find({"valor": {$lt:450}}, {"_id":0})

// // Seleciona todos os valores no intervalo entre 500 e 950
db['bd3-nosql-atv7'].find({"valor": {$gte:500, $lte:950}}, {"_id":0})

