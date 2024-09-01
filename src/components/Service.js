import React , {useState} from 'react';
import "./Service.css";

function Service() {
  const cardsData = [
    {
      title: "Stocks from top 10",
      text: `Cacti are native through most of the length of North and South America, from British Columbia and Alberta southward.`,
      imageUrl: "https://media.licdn.com/dms/image/D5612AQGjc1hhoTbAfQ/article-cover_image-shrink_720_1280/0/1711057884275?e=2147483647&v=beta&t=K7Vu5ep4n3vUg6MncPnXc90a-RFac97JR0O14OJgVRM",
    },
    {
      title: "Bonds and CDs",
      text: `Cacti are succulent perennial plants. Although a few species inhabit tropical or subtropical areas.`,
      imageUrl: "https://www.bankrate.com/2022/08/15141801/CDs-vs-bonds.jpg?auto=webp&optimize=high&crop=16:9",
    },
    {
      title: "Passive income",
      text: `Cacti vary greatly in size and general appearance, from buttonlike peyote to the upright columns of barrel cacti.`,
      imageUrl: "https://m.foolcdn.com/media/dubs/original_images/GettyImages-1277179014_1.jpg",
    },
    {
      title: "Savings advice",
      text: `Cacti are widely cultivated as ornamentals. In addition, various species are cultivated as food.`,
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJSrCBp02RBRkrI5fpOK8onvtlDHGN7dfXHg&s",
    },
  ];

  return (
    <section>
      {cardsData.map((card, index) => (
        <div className="column card-style" key={index}>
          <figure>
            <img src={card.imageUrl} alt={`${card.title} stock image`} />
          </figure>
          <div className="card-text">
            <h1>{card.title}</h1>
            <p className="ellipsis">{card.text}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Service;
