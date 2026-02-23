// import { Pool } from "pg";
//
// const DATABASE_URL = process.env.DATABASE_URL;
//
// declare global {
//   var pgCache: { pool: Pool | null };
// }
//
// let cached = global.pgCache;
//
// if (!cached) {
//   cached = global.pgCache = { pool: null };
// }
//
// export const connectToDatabase = async () => {
//   if (!DATABASE_URL) throw new Error("DATABASE_URL must be set within .env");
//
//   if (cached.pool) return cached.pool;
//
//   try {
//     cached.pool = new Pool({
//       connectionString: DATABASE_URL,
//       ssl:
//         process.env.NODE_ENV === "production"
//           ? { rejectUnauthorized: false }
//           : false,
//     });
//
//     // Test the connection
//     await cached.pool.query("SELECT 1");
//   } catch (err) {
//     cached.pool = null;
//     throw err;
//   }
//
//   console.log(
//     `Connected to database ${process.env.NODE_ENV} - ${DATABASE_URL}`,
//   );
//   return cached.pool;
// };
