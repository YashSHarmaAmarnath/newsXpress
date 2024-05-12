// import React from "react";
import { NewsItem } from "./NewsItem";
import React, { useState, useEffect } from "react";

export const News = ({ OpenArticle }) => {
  // let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=YOURAPIKEY`;
  const [data, setData] = useState({ articles: [] });
  // const ApiKey = "YOUR_API_KEY"; // Replace YOUR_API_KEY with your actual API key
// Use ful part pls dont delete
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://newsapi.org/v2/top-headlines?country=in&apiKey=YOURAPIKEY`
        );
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to ensure useEffect runs only once

const fetchSearchData = async (Query) => {
      try {
        const response = await fetch(
          `https://newsapi.org/v2/top-headlines?q=${Query}&country=in&apiKey=YOURAPIKEY`
        );
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
// let data = {  
//   "status": "ok",
//   "totalResults": 38,
//   "articles": [
//     {
//       "source": {
//         "id": null,
//         "name": "Moneycontrol"
//       },
//       "author": "Moneycontrol News",
//       "title": "RBI directs NBFCs to adhere to cash disbursal limit of Rs 20,000 for loans: Reports - Moneycontrol",
//       "description": "The letter has been sent in the aftermath of action against IIFL Finance, which was found to be in violation of several rules, said a report",
//       "url": "https://www.moneycontrol.com/news/business/banks/rbi-asks-nbfcs-to-stick-to-cash-disbursal-limit-of-rs-20000-for-loans-report-12717500.html",
//       "urlToImage": "https://images.moneycontrol.com/static-mcnews/2024/04/RBI.jpg",
//       "publishedAt": "2024-05-08T17:24:57Z",
//       "content": "The Reserve Bank of India has directed non-bank finance companies (NBFC) to strictly adhere to IT Act on cash disbursements. This means, NBFCs must stick to a cap of Rs 20,000 while disbursing cash l… [+984 chars]"
//     },
//     {
//       "source": {
//         "id": null,
//         "name": "Hindustan Times"
//       },
//       "author": "HT News Desk",
//       "title": "Kerala guv Arif Mohammad Khan visits Ayodhya's Ram Temple, bows down before deity | Watch video - Hindustan Times",
//       "description": "A video shared by the Raj Bhawan showed Khan bowing before the idol of Ram Lalla as chants of ‘Jai Shree Ram’ echo in the background. | Latest News India",
//       "url": "https://www.hindustantimes.com/india-news/kerala-guv-arif-mohammad-khan-visits-ayodhyas-ram-temple-bows-down-before-deity-watch-video-101715185563208.html",
//       "urlToImage": "https://www.hindustantimes.com/ht-img/img/2024/05/08/1600x900/Kerala_guv_1715185929825_1715185929996.png",
//       "publishedAt": "2024-05-08T16:54:11Z",
//       "content": "Kerala Governor Arif Mohammad Khan visited the Ram temple in Uttar Pradesh Ayodhya on Wednesday.\r\nKerala Governor Arif Mohammad Khan at the Ram Temple in Ayodhya.(X/RajBhawan)\r\nIn a video posted on X… [+1728 chars]"
//     },
//     {
//       "source": {
//         "id": "the-times-of-india",
//         "name": "The Times of India"
//       },
//       "author": "TOI News Desk",
//       "title": "Terrorist killed in fresh gunfight with security forces in J&K's Kulgam - The Times of India",
//       "description": "NEW DELHI: A security operation in Jammu and Kashmir's Kulgam district resulted in the death of another terrorist on Wednesday.",
//       "url": "https://timesofindia.indiatimes.com/india/terrorist-killed-in-fresh-gunfight-with-security-forces-in-jks-kulgam/articleshow/109957396.cms",
//       "urlToImage": "https://static.toiimg.com/thumb/msid-109957396,width-1070,height-580,imgsize-10714,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
//       "publishedAt": "2024-05-08T16:40:00Z",
//       "content": null
//     },
//     {
//       "source": {
//         "id": "the-times-of-india",
//         "name": "The Times of India"
//       },
//       "author": "Shifa Khan",
//       "title": "10 benefits of eating 1 Khajoor everyday - The Times of India",
//       "description": "Incorporating just one date or khajoor into your daily diet can provide a wide array of health benefits, ranging from improved digestive health to enhanced brain function and heart health.",
//       "url": "https://timesofindia.indiatimes.com/life-style/health-fitness/web-stories/10-benefits-of-eating-1-khajoor-everyday/photostory/109948658.cms",
//       "urlToImage": "https://static.toiimg.com/thumb/msid-109949141,imgsize-1128333,width-900,height-1200,resizemode-6/109949141.jpg",
//       "publishedAt": "2024-05-08T16:30:00Z",
//       "content": "Dates are a little fruit but are incredibly nutrient-dense. Fiber, potassium, magnesium, copper, manganese, and vitamins B6 and K are especially abundant in them. These nutrients are essential for ma… [+101 chars]"
//     },
//     {
//       "source": {
//         "id": "the-hindu",
//         "name": "The Hindu"
//       },
//       "author": "The Hindu",
//       "title": "INDIA bloc leaders to meet Election Commission over voter turnout, ‘religious’ politics - The Hindu",
//       "description": null,
//       "url": "https://www.thehindu.com/elections/lok-sabha/india-bloc-leaders-to-meet-election-commission-over-voter-turnout-religious-politics/article68154422.ece",
//       "urlToImage": null,
//       "publishedAt": "2024-05-08T16:10:00Z",
//       "content": null
//     },
//     {
//       "source": {
//         "id": null,
//         "name": "Hindustan Times"
//       },
//       "author": "HT Entertainment Desk",
//       "title": "Amul India celebrates Sanjay Leela Bhansali's Heeramandi with latest creative - Hindustan Times",
//       "description": "Heeramandi: The Diamond Bazaar marks director Sanjay Leela Bhansali's foray into the OTT space. It released on Netflix on May 1. | Web Series",
//       "url": "https://www.hindustantimes.com/entertainment/web-series/amul-india-celebrates-sanjay-leela-bhansalis-heeramandi-with-latest-creative-101715176320058.html",
//       "urlToImage": "https://www.hindustantimes.com/ht-img/img/2024/05/08/1600x900/GNDZXjQXwAAIJpJ_1715176608581_1715176633613.jpg",
//       "publishedAt": "2024-05-08T16:07:35Z",
//       "content": "Ever since Sanjay Leela Bhansali's Heeramandi: The Diamond Bazaar has released on Netflix, it has been the talk of the town. Although the show received polarizing reviews, fans have been talking abou… [+2023 chars]"
//     },
//     {
//       "source": {
//         "id": null,
//         "name": "YouTube"
//       },
//       "author": null,
//       "title": "Brazil Floods LIVE: Heavy Rain, Massive Floods Wreak Havoc Across Brazil, Thousands Displaced - Firstpost",
//       "description": "Brazil Floods LIVE: Heavy Rain, Massive Floods Wreak Havoc Across Brazil, Thousands DisplacedTorrential rains have caused catastrophic flooding in the southe...",
//       "url": "https://www.youtube.com/watch?v=p1r81sMdtdw",
//       "urlToImage": "https://i.ytimg.com/vi/p1r81sMdtdw/maxresdefault.jpg",
//       "publishedAt": "2024-05-08T15:50:49Z",
//       "content": null
//     },
//     {
//       "source": {
//         "id": null,
//         "name": "News18"
//       },
//       "author": "Aakash Biswas",
//       "title": "IPL 2024: RR Skipper Sanju Samson Punished by BCCI After Controversial Dismissal vs Delhi Capitals - News18",
//       "description": "According to IPL’s official statement, the RR skipper ‘committed a Level 1 offence under Article 2.8 of the IPL's Code of Conduct’ and has accepted the Match Referee’s sanction.",
//       "url": "https://www.news18.com/cricket/ipl-2024-rr-skipper-sanju-samson-punished-by-bcci-after-controversial-dismissal-vs-delhi-capitals-8881997.html",
//       "urlToImage": "https://images.news18.com/ibnlive/uploads/2024/05/sanju-samson-involved-in-a-argument-with-the-umpires-over-his-controversial-dismissal-2024-05-7b016e3eebb0da9ebbe2601e1d24acfa-16x9.jpg?impolicy=website&width=1200&height=675",
//       "publishedAt": "2024-05-08T15:41:53Z",
//       "content": "Rajasthan Royals (RR) captain Sanju Samson has been found guilty of breaching the IPL Code of Conduct in the fixture against Delhi Capitals (DC), played on Tuesday at the Arun Jaitley Stadium in New … [+2146 chars]"
//     },
//     {
//       "source": {
//         "id": null,
//         "name": "Hindustan Times"
//       },
//       "author": "HT Sports Desk",
//       "title": "‘KL Rahul justifying BCCI for dropping him from T20 WC squad’: Fans thank Agarkar as LSG skipper score 29 off 33 balls - Hindustan Times",
//       "description": "LSG skipper KL Rahul scored 29 runs off 33 balls at a strike rate of 87.87 in the crucial match agaisnt SRH on Wednesday. | Crickit",
//       "url": "https://www.hindustantimes.com/cricket/kl-rahul-justifying-bcci-for-dropping-him-from-t20-wc-squad-fans-thank-agarkar-as-lsg-skipper-score-29-off-33-balls-101715181488245.html",
//       "urlToImage": "https://www.hindustantimes.com/ht-img/img/2024/05/08/1600x900/KL_Rahul_1715182395948_1715182396203.jpg",
//       "publishedAt": "2024-05-08T15:38:43Z",
//       "content": "Lucknow Super Giants captain KL Rahul faced the wrath of fans on social media after a sluggish knock against Sunrisers Hyderabad on Wednesday at Rajiv Gandhi International Stadium, Hyderabad. Rahul, … [+2202 chars]"
//     },
//     {
//       "source": {
//         "id": null,
//         "name": "NDTV News"
//       },
//       "author": null,
//       "title": "Sam Pitroda Quits After Landing Congress In New Mess Over Racist Comments - NDTV",
//       "description": "Sam Pitroda Quits Congress Post After Huge Row Over His Racist Remarks",
//       "url": "https://www.ndtv.com/india-news/sam-pitroda-quits-congress-post-after-huge-row-over-his-racist-remarks-5618579",
//       "urlToImage": "https://c.ndtvimg.com/2019-03/k0pcivcg_sam-pitroda-pti-image-650_650x400_22_March_19.jpg",
//       "publishedAt": "2024-05-08T15:15:00Z",
//       "content": "New Delhi: Sam Pitroda, veteran Congressman and the party's overseas unit chief, stepped down from the post this evening amid a huge political row over his controversial remarks that came amid the ma… [+1970 chars]"
//     },
//     {
//       "source": {
//         "id": null,
//         "name": "NDTV News"
//       },
//       "author": null,
//       "title": "BSP Chief's Action Against Nephew Sparks Mayawati-Akhilesh Yadav Slugfest - NDTV",
//       "description": "The decades-old rivalry between the Samajwadi Party and Bahujan Samaj Party, on the backburner for long, has flared up again after Mayawati's disciplinary measures against \"political heir\" Akash Anand.",
//       "url": "https://www.ndtv.com/india-news/bsp-not-getting-a-single-seat-akhilesh-yadav-versus-mayawati-amid-polls-5619097",
//       "urlToImage": "https://c.ndtvimg.com/2019-05/i389hmg_akhilesh-yadav-mayawati-twitter-650_625x300_20_May_19.jpg",
//       "publishedAt": "2024-05-08T14:43:41Z",
//       "content": "New Delhi: The decades-old rivalry between the Samajwadi Party and Bahujan Samaj Party, on the backburner for long, has flared up again after Mayawati's disciplinary measures against \"political heir\"… [+2392 chars]"
//     },
//     {
//       "source": {
//         "id": null,
//         "name": "The Indian Express"
//       },
//       "author": "The Indian Express",
//       "title": "SRH vs LSG Live Score, IPL 2024: Lucknow Super Giants 45/2 (8 overs), Bhuvneshwar Kumar sends back Marcus Stoinis - The Indian Express",
//       "description": null,
//       "url": "https://indianexpress.com/article/sports/cricket/srh-vs-lsg-live-score-ipl-2024-match-57-today-sunrisers-hyderabad-vs-lucknow-super-giants-scorecard-updates-9315580/",
//       "urlToImage": null,
//       "publishedAt": "2024-05-08T14:35:27Z",
//       "content": null
//     },
//     {
//       "source": {
//         "id": null,
//         "name": "News18"
//       },
//       "author": "Shankhyaneel Sarkar",
//       "title": "AstraZeneca Pulls COVID Vaccine from EU, Begins Global Withdrawal - News18",
//       "description": "Pharma major AstraZeneca is withdrawing its COVID-19 vaccine worldwide.",
//       "url": "https://www.news18.com/world/astrazeneca-withdraws-its-covid-vaccine-8881846.html",
//       "urlToImage": "https://images.news18.com/ibnlive/uploads/2024/05/unsplash-vaccine-uk-cancer-trial-mufid-majnun-representative-2024-05-d61e31c1c5f4442fe88cd71d1501b801-16x9.jpg?impolicy=website&width=1200&height=675",
//       "publishedAt": "2024-05-08T14:25:15Z",
//       "content": "Anglo-Swedish drugmaker AstraZeneca will withdraw its COVID-19 vaccine worldwide, UK-based media outlet The Telegraph said in a report published Tuesday (local time).\r\nThe report said that the vaccin… [+1752 chars]"
//     },
//     {
//       "source": {
//         "id": null,
//         "name": "Livemint"
//       },
//       "author": "Livemint",
//       "title": "Chandrayaan-2 data makes significant discovery, finds water ice on Moon's polar craters | Mint - Mint",
//       "description": "The study has suggested that ‘the amount of subsurface ice in the first couple of meters is about 5 to 8 times larger than the one at the surface in both poles,’ ISRO said",
//       "url": "https://www.livemint.com/news/chandrayaan2-data-makes-significant-discovery-finds-water-ice-on-moons-polar-craters-11715174542450.html",
//       "urlToImage": "https://www.livemint.com/lm-img/img/2024/05/08/1600x900/Moon_1709007133688_1715175608983.jpg",
//       "publishedAt": "2024-05-08T14:25:01Z",
//       "content": "Months after India took a short walk on the Moon as Chandrayaan-3 strolled around, polarimetric radar data used from the Chandrayaan-2 Dual-frequency Synthetic Aperture Radar has hinted at significan… [+2154 chars]"
//     },
//     {
//       "source": {
//         "id": null,
//         "name": "India Today"
//       },
//       "author": "India Today Web Desk",
//       "title": "Rahul Gandhi retorts to PM Modi's 'deal with Ambani-Adani' jibe - India Today",
//       "description": "In a video message Rahul Gandhi responded to PM Modi039s deal with Ambani-Adani jibe",
//       "url": "https://www.indiatoday.in/elections/lok-sabha/story/rahul-gandhi-retort-to-pm-modi-deal-with-ambani-adani-jibe-2536766-2024-05-08",
//       "urlToImage": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202405/rahul-gandhi-084641876-16x9_0.jpeg?VersionId=bWcKFxpzPrnMs0avUjSC32tW6uxPv_ja",
//       "publishedAt": "2024-05-08T13:40:10Z",
//       "content": "Congress leader Rahul Gandhi on Wednesday hit back at Prime Minister Narendra Modi over the ‘deal with Ambani-Adani’ jibe. In a video message, Rahul Gandhi said, “Namaskar Modiji, are you scared?”\r\n\"… [+1134 chars]"
//     },
//     {
//       "source": {
//         "id": null,
//         "name": "YouTube"
//       },
//       "author": null,
//       "title": "New launch date set for Boeing's first astronaut launch - First Coast News",
//       "description": "The launch was supposed to happen on Monday, but didn't because of a pressure relief valve issue. The new launch date is set for May 17.",
//       "url": "https://www.youtube.com/watch?v=y-lvITFj63A",
//       "urlToImage": "https://i.ytimg.com/vi/y-lvITFj63A/hqdefault.jpg",
//       "publishedAt": "2024-05-08T13:15:50Z",
//       "content": null
//     },
//     {
//       "source": {
//         "id": null,
//         "name": "Hindustan Times"
//       },
//       "author": "Mahima Pandey",
//       "title": "5 times Malti Marie stole the show on Priyanka Chopra’s IG feed: From being her mum’s barbell to saying ‘Ayodhya’ - Hindustan Times",
//       "description": "Priyanka Chopra Jonas often shares sneak peeks of life with her daughter Malti Marie Chopra Jonas. Here are our top 5 moments which are beyond adorable",
//       "url": "https://www.hindustantimes.com/htcity/cinema/5-times-malti-marie-stole-the-show-on-priyanka-chopra-s-ig-feed-from-being-her-mum-s-barbell-to-saying-ayodhya-101715171176455.html",
//       "urlToImage": "https://www.hindustantimes.com/ht-img/img/2024/05/08/1600x900/Priyanka_and_Malti_1715171557980_1715171648656.jpg",
//       "publishedAt": "2024-05-08T13:09:32Z",
//       "content": "One thing fans love even more than their favourite celebrities is star kids. A major example of the same is our desi girl Priyanka Chopra Jonas darling daughter Malti Marie Chopra Jonas. PeeCees mini… [+2420 chars]"
//     },
//     {
//       "source": {
//         "id": null,
//         "name": "Mediabrief.com"
//       },
//       "author": "MBDesk",
//       "title": "Sava Healthcare rolls out QR-coded Asthma awareness campaign in 4 nations - Mediabrief",
//       "description": "This World Asthma Day, SAVA Healthcare Limited (SHL), has launched a QR-coded awareness campaign across four countries",
//       "url": "https://mediabrief.com/sava-healthcare-rolls-out-qr-coded-asthma-awareness-campaign-in-4-nations/",
//       "urlToImage": "https://mediabrief.com/wp-content/uploads/2024/05/Image-Sava-Healthcare-QR-Coded-Asthma-Awareness-Campaign-MediaBrief.jpg",
//       "publishedAt": "2024-05-08T12:47:23Z",
//       "content": "As part of the campaign, SHL has collaborated with over 300 pulmonologists and chest physicians in more than 500 hospitals and clinics across four countries.In line with the theme of the year titled,… [+1240 chars]"
//     },
//     {
//       "source": {
//         "id": null,
//         "name": "NDTV News"
//       },
//       "author": null,
//       "title": "Sonakshi Sinha On Heeramandi Same-Sex Foreplay Scene: \"She Absolutely Hates Men\" - NDTV Movies",
//       "description": "Sonakshi Sinha played the character of Fareedan in the series",
//       "url": "https://www.ndtv.com/entertainment/sonakshi-sinha-on-heeramandi-same-sex-foreplay-scene-she-absolutely-hates-men-5618123",
//       "urlToImage": "https://c.ndtvimg.com/2024-05/4jjffas_gg_625x300_08_May_24.jpeg",
//       "publishedAt": "2024-05-08T12:38:50Z",
//       "content": "A still from the series. (courtesy: YouTube)\r\nNew Delhi: Sonakshi Sinha, soaring high with the success of Heeramandi, opened up about her character Fareedan's gender fluidity and a particular scene (… [+2264 chars]"
//     },
//     {
//       "source": {
//         "id": null,
//         "name": "NDTV News"
//       },
//       "author": null,
//       "title": "On Camera, Lashkar Terrorists Who Attacked Air Force Convoy In J&K's Poonch - NDTV",
//       "description": "Security forces have released photographs of three terrorists believed to be involved in the attack on an Air Force convoy in Jammu and Kashmir's Poonch district last week, in which Corporal Vikky Pahade was killed and four of his colleagues injured.",
//       "url": "https://www.ndtv.com/india-news/terrorists-who-attacked-air-force-convoy-in-j-ks-poonch-named-pics-released-5617948",
//       "urlToImage": "https://c.ndtvimg.com/2024-05/m9gb4l1_poonch-terrorists-collage-ndtv_650x400_08_May_24.jpg",
//       "publishedAt": "2024-05-08T12:19:40Z",
//       "content": "All three terrorists reportedly used high-powered assault rifles\r\nNew Delhi: Photographs - from CCTV footage - have been released of three terrorists believed to be involved in the attack on an Air F… [+2368 chars]"
//     }
//   ]
// }
  const Search=()=>{
    console.log("Searching..")
    var inputValue = document.getElementById("newsSearch").value;
    if (inputValue){
    console.log(inputValue)
    fetchSearchData(inputValue)
  }
    // alert(inputValue)
  }

  return (
    <div className="NewsContainer">
      <div className="search">
        <center>
          <input type="text" name="" id="newsSearch" placeholder="Search"/>
          <input type="button" value="Searech" className="button" onClick={Search} />
        </center>
      </div>
      <div className="container">
      {data.articles.map((element) => {
        return (
          <div
            className="NewsItemContainer"
            onClick={() => {
              OpenArticle(
                element.title,
                element.description,
                element.urlToImage,
                element.author,
                element.publishedAt,
                element.source.name,
                element.url,
              );
            }}
            key={element.url}
          >
            <NewsItem
              title={element.title ? element.title : ""}
              //   description={element.description ? element.description : ""}
              imageUrl={
                element.urlToImage
                  ? element.urlToImage
                  : "https://upload.wikimedia.org/wikipedia/commons/7/75/No_image_available.png"
              }
              //   newsUrl={element.url}
              //   author={element.author}
              //   date={element.publishedAt}
              //   source={element.source.name}
            />
          </div>
        );
      })}   
      </div>
    </div>
  );
};
