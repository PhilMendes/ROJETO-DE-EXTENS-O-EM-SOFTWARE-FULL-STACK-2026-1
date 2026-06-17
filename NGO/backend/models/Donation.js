const mongoose = require('mongoose');

const donationSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Nome é obrigatório'],
      trim: true,
    },
    phone: {
      type: String,
      required: [true, 'Número de telefone é obrigatório'],
      match: [/^\d{10}$/, 'Número de telefone deve conter exatamente 10 dígitos'],
    },
    date: {
      type: Date,
      required: [true, 'Data é obrigatória'],
    },
    location: {
      type: String,
      required: [true, 'Localização é obrigatória'],
      trim: true,
    },
    donationType: {
      type: String,
      required: [true, 'Tipo de doação é obrigatório'],
      enum: ['Comida', 'Roupa', 'Dinheiro', 'Educação', 'Médico'],
    },
    amount: {
      type: Number,
      validate: {
        validator: function (value) {
          // Only validate amount if donationType is 'money'
          if (this.donationType === 'money') {
            return value > 0;
          }
          return true;
        },
        message: 'A doação deve ser um número positivo quando o tipo de doação é Dinheiro',
      },
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    versionKey: false, // optional: removes __v field
  }
);

module.exports = mongoose.model('Donation', donationSchema);
