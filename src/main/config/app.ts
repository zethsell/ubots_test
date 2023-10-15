// import { setupMiddlewares } from '@/main/config/middlewares'
import express from 'express'
import {setupMiddlewares} from "@/main/config/middlewares.js";
import {setupRoutes} from "@/main/config/routes.js";

const app = express()
setupMiddlewares(app)
setupRoutes(app)
export { app }
