export const config = {
  username: process.env.POSTGRES_USERNAME,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  host: process.env.POSTGRES_HOST,
  dialect: "postgres",
  aws_region: process.env.AWS_REGION,
  aws_profile: process.env.AWS_PROFILE,
  aws_media_bucket: process.env.AWS_BUCKET,
  s3_access_key: process.env.S3_ACCESS_KEY,
  s3_secret_key: process.env.S3_SECRET_KEY,
  url: process.env.URL,
  jwt: {
    secret: process.env.JWT_SECRET
  }
}
