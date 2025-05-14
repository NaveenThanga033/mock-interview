/** @type {import('@drizzle-team/drizzle-kit').Config} */   
export default{
    schema:"./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
        url: 'postgresql://ai-interview-mock_owner:npg_lGc9reh8dIPW@ep-tiny-king-a8c2muqs-pooler.eastus2.azure.neon.tech/ai-interview-mock?sslmode=require',
    }
};