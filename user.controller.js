const userModel = require('./user.model');
//var user,{User} = require('./user.model');
exports.create = async (req, res) =>{
    try {
        const usuario = await userModel.create(req.body);
        //console.log(usuario)
        res.status(200).send(usuario);
    } catch (error) {
        console.log(erro)
        res.send(erro);
    }
   // res.send('Olá! Teste ao Controller');
};

exports.show = async (req, res) =>{
    try {
        const newUser = { nome:"Ruan",idade:35};
        const user = await userModel.create(newUser);
        const usuario = await userModel.find();
        //console.log(usuario)
        res.status(200).send(user);
    } catch (error) {
        console.log(erro)
        res.send(erro);
    }
};

exports.details = async (req,res)=>{
    try {
        const usuario = await userModel.findById(req.params.id);
        //console.log(usuario)
        res.send(usuario);
    } catch (error) {
        console.log(erro)
        res.send(erro);
    }
}

exports.update = async (req,res)=>{
    try {
        const usuario = await userModel.updateOne(req.body);
        const user = await userModel.findById(req.params.id);
        res.status(200).send(user);
    } catch (error) {
        console.log(erro)
        res.send(erro);
    }
}

exports.delete = async (req, res) =>{
    try {
        const usuario = await userModel.deleteOne(req.body.id);
       // console.log(usuario)
        res.status(200).send("Usuario deletado com sucesso");
    } catch (error) {
        console.log(erro)
        res.send(erro);
    }
   // res.send('Olá! Teste ao Controller');
};