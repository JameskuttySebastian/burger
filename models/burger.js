const orm = require("../config/orm");

const burger = {
    selectAll : function(callback){
        orm.selectAll("burgers", function(response){
            callback(response);
        })
    },
    insertOne : function(columns, valuess, callback){
        orm.insertOne("burgers", columns, valuess, function(response){
            callback(response);
        })
    },
    updateOne: function(objColumnsAndValuess, condition, callback){
        orm.updateOne("burgers", objColumnsAndValuess, condition, function(response){
            callback(response);
        })
    },
    deleteOne: function(condition, callback){
        orm.deleteOne("burgers",  condition, function(response){
            callback(response);
        })
    }
}

module.exports = burger;