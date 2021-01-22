import img1 from '../static/img/tree.png'
import img2 from '../static/img/snow-land.png'
import img3 from '../static/img/city-topview.png'

// services
import handshake from '../static/img/handshake.png'
import worker from '../static/img/worker.png'
import chart from '../static/img/chart.png'
import planer from '../static/img/planer.png'


export const posts = [
  {
    "slug":"2020 at a glance: yearly review",
    "img_url": img1,
    "posted_on": "JANUARY 2021",
    "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices egestas adipiscing.",
    "url":"https://",
    "_id":1
  },
  {
  "slug":"Q3 at a glance: quarterly review",
    "img_url": img2,
    "posted_on": "DECEMBER 2020",
    "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices egestas adipiscing.",
    "url":"",
    "_id": 2
  },
  {
 "slug":"Q4 at a glance: quarterly review",
    "img_url": img3,
    "posted_on": "SEPTEMBER 2020",
    "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices egestas adipiscing.",
    "url":"https://",
    "_id":3
  }
]

export const services = [
  { "title": "Consulting", "description": "Nothing excites us like an opportunity to help our clients make those key decisions that marries their business ideals and sustainability in a way helps them innovate in the areas of new products, ideas and service that keeps them ahead of competition.", "img_url": handshake },

  { "title": "Impact Measurement & Accessment", "description": "At TCSRN, we help decision-makers and policy-makers decide what actions they should or should not take to make society more sustainable, and also ensure that plans and activities makes an optimal contribution to sustainable development", "img_url": worker },

  { "title": "Engagement Design", "description": "Consumers have finite attention spans and limited, as such, gaining their attention as quickly as possible and trying to establish the bonding capital with them is vital. We are adept at devising the surest and the most potent of reaching your target audience and ensuring optimized bonding that build mutual trust.", "img_url": chart },

  {"title": "Strategy", "description": "At TCSRN, we provide service that assist our client to set new agendas and reengineer their business models that boost their chances at a sustainable future in which innovation propels their productivity.", "img_url":planer}
]