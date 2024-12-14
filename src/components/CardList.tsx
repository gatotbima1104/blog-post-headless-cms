import React from 'react'
import CardFeatured from './atom/Card'

import News1 from "../../public/news1.png"
import News2 from "../../public/news2.jpeg"
import News3 from "../../public/news3.jpeg"
import News4 from "../../public/news4.jpeg"
import News5 from "../../public/news5.jpeg"


interface ICardList {
    title: string
}

export default function CardList(card: ICardList) {
  return (
    <div className="mx-auto max-w-[80%] py-5 space-y-5">
    <h1>{card.title}</h1>
    <div className="grid sm:grid-cols-3 lg:grid-cols-5 gap-2">
      <CardFeatured image={News1} title="Nyeleneh! Kafe Ini Tawarkan Es Kopi Topping Indomie Goreng"/>
      <CardFeatured image={News2} title="Bertemu Jokowi di Solo, Sandiaga Puji Inovasi 'Partai Perorangan'"/>
      <CardFeatured image={News3} title="Jonatan Christie Menang Hari Ini, Besok Jalani Laga Hidup Mati!"/>
      <CardFeatured image={News4} title="WIKA Garap 74 Proyek Infrastruktur, 7 Ada di IKN"/>
      <CardFeatured image={News5} title="Potret Talitha Curtis, Dulu Ratu FTV Kini Dagang Risol"/>
    </div>
  </div>
  )
}
