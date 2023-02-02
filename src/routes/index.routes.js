import { Router } from "express";
import {
  renderIdex,
  newsSave,
  newsDelete,
  allNews,
  aNew,
} from "../controllers/news.controllers";

const router = Router();

router.get("/api", renderIdex);

router.get("/api/noticias", allNews);

router.get("/api/noticias/:id", aNew);

router.post("/news/add", newsSave);

router.get("/delete/:id", newsDelete);

export default router;
