const database = require("./database-connection");

module.exports = {
    list(){
        return database('coffee').select()
    },
    read(id){
        return database('coffee').where('id','=',id).select().then(result => result[0])
    },
    create(coffee){
        return  database('coffee').insert(coffee).returning('*').then( record => record[0]); 
    },
    update(id, coffee){
        return database('coffee').where('id','=',id).returning('id').update(coffee);
    },
    delete(id){
        return database('coffee').where('id','=',id).delete();
    }
};
