const knex = require('../database/connection');



exports.findById = (id) => {
  return knex
    .select('*')
    .from('uploads')
    .where('id', id)
    .first();
}

exports.all = () => {
  return knex
    .from('uploads')
    .select('*');
}

exports.create = (upload, image) => {

  let url = 'http://localhost:3000/images/' + image.filename;
  return knex('uploads')
    .insert({ title: upload.title, description: upload.desciption, imgUrl: url })
}
