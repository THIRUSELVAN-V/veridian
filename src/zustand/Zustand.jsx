import { create } from "zustand";
import rank from "../assets/rank.png";
import brain from "../assets/brain.png";
import heart from "../assets/heart.png";
import global from "../assets/global.png";
import Investment from "../assets/Investment.png";
import Portfolio from "../assets/Portfolio.png";
import Corporate from "../assets/Corporate.svg";
import img1 from "../assets/image5.png";
import img2 from "../assets/image6.png";
import img3 from "../assets/image7.png";
export const store = create(() => ({
    about: [
      {
        id: "1",
        heading: "Excellence",
        body: "We strive for excellence by continuously honing our skills & expanding our knowledge. Our commitment to excellence drives innovation and quality, setting us apart as leaders in our field.",
        img: rank,
      },
      {
        id: "2",
        heading: "Initiative",
        body: "We encourage a proactive mindset where our team is empowered to take initiative and pursue opportunities for growth. We drive creativity and transformative solutions.",
        img: brain,
      },
      {
        id: "3",
        heading: "Sustainability",
        body: "We are dedicated to sustainable practices that positively impact our community and environment. Our commitment to responsibility ensures we contribute to a better future for generations to come.",
        img: heart,
      },
      {
        id: "4",
        heading: "Integrity",
        body: "We operate with honesty and uphold the highest ethical standards. Integrity is the cornerstone of our business, guiding our actions and decisions to earn the trust of our clients and partners.",
        img: global,
      },
    ],
  
    Holistic: [
      {
        id: "1",
        img:Investment,
        heading: "Investment focus and strategy",
        para1:
          "Veridian focuses on companies across a number of different sectors, predominantly internet-based companies with long term growth potential, with the aim of releasing the potential of businesses, sustainably improving operations and generating significant growth and profitability. ",
        para2:
          "Our investment strategy creates value at every stage of an investment. Utilizing the strengths of our industry experienced team, Veridian has crafted a streamlined process from identifying potential opportunities through due diligence and deal documentation and onward to integration and transformation. Veridian’s unique combination of people and processes is market-tested to generate and release significant value and growth.",
      },
      {
        id: "2",
        img:Portfolio,
        heading: "Portfolio",
        para1:
          "The central investment of Veridian is in the Pragmatic Play group of companies headed by Tamaris (Gibraltar) Limited. Pragmatic Play is a world-leading game developer providing player-favourites to the most successful global brands in the iGaming industry.",
        para2:
          "Powering up new possibilities of play through one single API, Pragmatic Play offers a multi-product portfolio of award-winning slots, live casino, bingo, virtual sports, sportsbook and more, available in all major regulated markets, languages and currencies. Driven by persistence to craft immersive experiences and responsible thrills, Pragmatic Play’s professional team consistently deliver best in class services to its partners worldwide with a dedication to creating games that players love time and time again.",
      },
      {
        id: "3",
        img:Corporate,
        heading: "Corporate social responsibility",
        para1:
          "Veridian supports responsible investing and evaluates environmental, social and governance issues in its investments. Veridian believes that responsible investing and return on investment go together, and consideration of ESG issues improves portfolio company performance and investment results.",
      },
    ],
    members: [
        {
          name: "Julian Jarvis",
          position: "Chairman, Founder and CEO",
          img: img1,
          about:
            "Julian is an experienced lawyer, businessman and investor with over 25 years of start-up, private and public company experience. In the internet and iGaming industries – including America Online Inc., AOL Time Warner Inc., PartyGaming Plc and other companies. Julian has a focus on fast growth companies in emerging regulatory environments. Julian's current focus is as CEO and co-founder of Pragmatic Play, a leading multi-award winning supplier to the international iGaming and betting industries.",
        },
        {
          name: "Peter Montegriffo KC",
          img: img2,
          about: `Peter Montegriffo KC has been closely involved in advising major financial services and e-commerce operators establishing a presence in Gibraltar and expanding their activities internationally. This has included working with investment groups and private client family offices.In his capacity as a Consultant at Hassans and member of the firm’s Corporate & Commercial team for over 35 years, Peter’s area of expertise is in Gibraltar and international commercial and private client matters.`,
          about2:"Peter has worked on a number of public listings on the London Stock Exchange. He continues to advise on restructuring, merger and consolidation exercises. He has also been involved in drafting numerous changes to Gibraltar’s legislation in trusts, financial services and gaming. Peter was Gibraltar’s Minister for Trade and Industry, with responsibility for economic development and financial services, between May 1996 and February 2000.  Peter was appointed KC in Gibraltar in June 2014."
        },
        {
          name: "Grahame Jackson",
          img: img3,
          about: `Grahame Jackson is a Fellow of the Chartered Institute of a Taxation and a member of the Chartered Institute of Taxation's prestigious International Taxes Committee. Grahame has advised numerous international gaming companies in matters of taxation and is a regular adviser to other industries on matters of both domestic Gibraltar taxation and international taxation.`,
          about2:"He has written extensively on international information exchange mechanisms, the current international taxation reform in the context of the rule of law and British Overseas Territories and constitutional relationships between BOTs and the United Kingdom, and is the Head of the Tax Advisory Team and partner at Hassans.",
        },
      ]
  }));