import express from "express"
import path from "path"
import cors from "cors"

const app = express()

app.use(cors())

app.get("/asdf.video_mp4", (req, res) => {
  res.sendFile(path.join(import.meta.dir, "sample-5s.mp4"))
})

app.listen(3002)
