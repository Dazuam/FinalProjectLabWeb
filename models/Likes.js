const knex = require('../database/connection');

exports.findForTimeline = (id) => {
    return knex
      .select('*')
      .from('likes')
      .whereIn('user_id', id)
  }