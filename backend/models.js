const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('stagiuvt', 'root', '', {
    host: 'localhost',
    dialect: 'mariadb',
  });

  const User = sequelize.define('user', {
    id: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false,
    },
    firstname: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    lastname : {
        type: Sequelize.STRING,
        allowNull: false,
    },
    username: {
      type: Sequelize.STRING,
      unique: true,
      allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    createdAt : {
        type: Sequelize.DATE,
        allowNull: false,
    },
    updatedAt : {
        type: Sequelize.DATE,
        allowNull: false,
    },
    user_role : {
        type: Sequelize.NUMBER,
        allowNull: false,
        defaultValue: 0
    },
  });

  User.sync().then(() => {
    console.log('User model synced with the database');
  });
  

  module.exports = { User };
    
    