if (process.env.NODE_ENV === 'development') {
  require('dotenv').config()
}

const {
  GITHUB_ID,
  GITHUB_SECRET,
  EMAIL_SERVER,
  EMAIL_FROM,
  DATABASE_URL,
  SENDGRID_API_KEY,
  NEXTAUTH_URL
} = process.env
module.exports = {
  env: {
    GITHUB_ID,
    GITHUB_SECRET,
    EMAIL_SERVER,
    EMAIL_FROM,
    DATABASE_URL,
    SENDGRID_API_KEY,
    NEXTAUTH_URL
  }
}
