import express from 'express';
import bodyParser from 'body-parser';

const app = express();

// logger
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));

export default app;
