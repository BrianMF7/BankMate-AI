import React , {useState} from 'react';
import "./Service.css";

function Service() {
  const cardsData = [
    {
      title: "Stocks from top 10",
      text: `BankMate AI is designed to help users discover top-performing stocks each day. Analyzing the latest market trends, financial data, and expert opinions to recommend the best stocks for investment. If your just a beginner or an investor, stay informed and make smarter investment decisions with Buddyfin AI. `,
      imageUrl: "https://media.licdn.com/dms/image/D5612AQGjc1hhoTbAfQ/article-cover_image-shrink_720_1280/0/1711057884275?e=2147483647&v=beta&t=K7Vu5ep4n3vUg6MncPnXc90a-RFac97JR0O14OJgVRM",
    },
    {
      title: "Bonds and CDs",
      text: `BankMate AI can help you find top-rated bonds and Certificates of Deposit (CDs) daily. It scans the market to identify secure and high-yielding investment options that can help you grow your savings steadily.  Buddyfin AI ensures you have access to the most reliable and profitable choices available. Recommendations includes U.S. Treasury Bonds, Apple or CDs from top banks like Goldman Sachs, offering competitive interest rates with minimal risk.`,
      imageUrl: "https://www.bankrate.com/2022/08/15141801/CDs-vs-bonds.jpg?auto=webp&optimize=high&crop=16:9",
    },
    {
      title: "Passive income",
      text: `BankMate AI discovers popular and easy ways to earn passive income and start side hustles. Stocks, bonds, or CDs, or explore new routes for generating extra income, It's like having a financial coach that guides you to the best opportunities, making it easier to build wealth and secure your financial future with minimal effort. `,
      imageUrl: "https://images.inc.com/uploaded_files/image/1920x1080/getty_505872010_2000135720009280248_115470.jpg",
    },
    {
      title: "Savings advice",
      text: `Buddyfin AI also helps with savings tips. It offers personalized advice on how to save money effectively, if you want to grow your savings account, invest or simply manage your daily expenses better. With strategies and guidance, Buddyfin AI helps you reach your financial goals with ease and confidence.`,
      imageUrl: "https://cdn.gobankingrates.com/wp-content/uploads/2021/01/savings-iStock-1177056123-e1609885817397.jpg?webp=1&w=1280&quality=75",
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
            <p className="ellipsis" style={{ color: 'black' }}>{card.text}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Service;
