const knex = require('../database/connection');



exports.findById = (id) => {
  return knex
    .select('*')
    .from('uploads')
    .where('id', id)
    .first();
}

exports.all = () => {
  // Realiza la consulta dentro de knex
  return knex
    .select('*')
    .from('uploads');
}

exports.findByUser = (user)=>{
  return knex
    .select('*')
    .from('uploads')
    .where('user', user.name)
    
}

exports.findMostPopular = () =>{
  var date = new Date();
  var yesterday = new Date(date.getTime());
  yesterday.setDate(date.getDate() - 1);
  return knex
  .select('*')
  .from('uploads')
  .where('created_at','>',yesterday)
  .orderBy('likes','desc')
  .limit(10)
}


exports.create = (upload, image, user) => {

  let url = 'http://localhost:3000/images/' + image.filename;
  return knex('uploads')
    .insert({ title: upload.title, description: upload.desciption, imgUrl: url, user: user.name })
}
