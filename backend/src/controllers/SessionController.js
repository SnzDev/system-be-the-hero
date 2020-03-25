const connection = require('../database/connection');

module.exports = {
    async index(req,res){
        const a = 1;
        const {id} = req.body;

        console.log(a);
        console.log(id);

        const ong = await connection('ongs')
        .where('id', id)
        .select('name')
        .first();

        if(!ong){
            return res.status(400).json({error: 'No ONG found with this id'});
        }

        return res.json({ong});
    }
}