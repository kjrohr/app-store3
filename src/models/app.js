const db = require('./db.js');

exports.add = (payload, err, success) => {
  db.app.create(payload).then(success).catch(err);
}

exports.all = (err, success) => {
  db.app.findAll().then(success).catch(err);
}

exports.one = (payload, err, success) => {
  db.app.find({
    where: {
      id: payload.id
    },
    // Find all relations defined in sequelize
    include: [{
      all: true,
      nested: true,
    }],
  }).then(success).catch(err);
}

exports.remove = (payload, err, success) => {
  db.app.destroy({
    where: {
      id: payload.id,
    }
  }).then(success).catch(err);
}

exports.update = (payload, err, success) => {
    db.app.find({
      where: {
        id: payload.id,
      }
    }).then((existingData) => {
      existingData.updateAttributes(payload).then(success).catch(err);
    }).catch(err);
}
