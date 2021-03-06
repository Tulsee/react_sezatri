const app = require('./app');
const connectDatabase = require('./config/database');
const dotenv = require('dotenv');

dotenv.config({ path: 'backend/config/config.env' });

// connectDatabase
connectDatabase();

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
