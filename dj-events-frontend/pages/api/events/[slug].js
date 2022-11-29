// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const { events } = require("./data.json");

export default function handler(req, res) {
  if (req.method == "GET") {
    const evt = events.filter((evt) => evt.slug === req.query.slug);
    res.status(200).json(evt);
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).json({ methos: `Method ${req.method} is not allowed` });
  }
}
