const mongoose = require('mongoose')
const databaseUrl =
  process.env.DATABASE_URL || 'mongodb://localhost/argentBankDB'

module.exports = async () => {
  try {
    // await mongoose.connect(databaseUrl, { useNewUrlParser: true })
      await mongoose.connect(databaseUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true, // Ajout de l'option recommandée suite à message 'DepreciationWarning' au moment de lancer la commande npm run dev:server
      });
    console.log('Database successfully connected')
  } catch (error) {
    console.error(`Database Connectivity Error: ${error}`)
    throw new Error(error)
  }
}
