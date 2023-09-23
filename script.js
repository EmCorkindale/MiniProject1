let feedback = [
  {
    id: "1",
    review:
      '"We had Michelle and Simon sell two of our properties and find one for us. At all times they were professional and responsive and we were very happy with the results. To be honest, moving forward, we wouldn\'t use anyone else"',
    author: "Glen and Tor Daniels",
  },
  {
    id: "2",
    review:
      '"Michelle was fantastic to work with and would 100% use her again. Really knew the market and who we were targeting. Communication was excellent and she answered all of our questions quickly and honestly. She had great ideas for staging too. Michelle was totally invested in selling our property and always gave her all at the open homes and catch up meetings. She really wanted to make this an easy process and get us the best possible price we could. Totally seamless and stress free experience!"',
    author: "Laura",
  },
  {
    id: "3",
    review:
      "\"My partner and I really appreciated Michelle and Simon's help in purchasing our first home. Michelle was very down to earth and happy to explain the whole auction process to us when we had no idea what we were doing! We really felt like we were supported and could ask any and all questions, knowing they'd always be responded to in a prompt and friendly way.\"",
    author: "",
  },
  {
    id: "4",
    review:
      "\"My partner and I really appreciated Michelle and Simon's help in purchasing our first home. Michelle was very down to earth and happy to explain the whole auction process to us when we had no idea what we were doing! We really felt like we were supported and could ask any and all questions, knowing they'd always be responded to in a prompt and friendly way.\"",
    author: "Buyer",
  },
  {
    id: "5",
    review:
      '"Allow us to express our views and concerns freely. Very please with Michelle\'s attention to details and parmatic advice"',
    author: "Weng Kei Chen",
  },
  {
    id: "6",
    review:
      '"Michelle was a very competent and professional agent. She helped us greatly in finding what we were looking for and the communication was flawless."',
    author: "Yue Yao",
  },
  {
    id: "7",
    review:
      '"A very pleasing transaction throughout the selling campaign. Constant feedbacks and follow ups kept us informed as to the present mood of the real estate market."',
    author: "Seller",
  },
  {
    id: "8",
    review:
      '"Michelle and Simon worked very hard to market a property which was always going to present challenges. She displayed commitment to delivering a campaign which had enough punch to attract what looked like a number of serious prospects.On the day of the auction, Michelle went all out to get the best result in a flat market.we as owners could easily have walked away with no sale but the Harcourts team I thought did a great job of keeping the sale alive. There is no comparison basis between Michelle’s team and a local Akaroa competitor who came up with no result in almost a year. There was honesty attached to the sales process which I thought was commendable and at no time did I feel left out of the communication loop. In all, well done, great effort and although sale price was well below our expectations, we have a result which allows us to move on! Thankyou."',
    author: "Alastair Sands",
  },
  {
    id: "9",
    review:
      '"Was very friendly and knowledgeable throughout the buying experience, was quick to get any information requested. Easy to communicate, and helped in every way possible. :)"',
    author: "Angela",
  },
  {
    id: "10",
    review:
      '"We engaged with Michelle due to the reputation she has within a competitive market. Michelle listened to us, engaged us with the information we needed to make decisions that suited our budget, but more importantly, gave us the greatest chance of getting the price we wanted. Given the current economic climate, we were more than impressed with the end result.At no point did we feel disconnected, even though we reside in Australia. The reports we received each week reassured us that we were on target. Simon and Michelle would provide updates via email, text or phone calls.The advice we received was spot on. Their true authentic personalities was perfect for us as Michelle and Simon appreciate that selling and buying a house is stressful. They engaged a wonderful business to put furniture in our house that highlighted the features of it. Without a doubt, the team of Michelle and Simon by your side is one you will not be disappointed with!"',
    author: "Craig Downing",
  },
];
let currentIndex = 0;
let interval = setInterval(displayFeedback, 30000);

function displayFeedback() {
  if (currentIndex < feedback.length) {
    document.getElementById(
      "review"
    ).innerHTML = `${feedback[currentIndex].review}<br> ${feedback[currentIndex].author}`;
    currentIndex++;
  } else {
    clearInterval(interval);
  }
}
displayFeedback();
fetch("previousListings.json")
  .then((response) => {
    return response.json(); // Parse the JSON data
  })
  .then((data) => {
    const cardContainer = document.getElementById("cardContainer");

    data.forEach((item) => {
      const cardColumn = document.createElement("div");
      cardColumn.classList.add("col-lg-3", "col-md-6", "mb-4");
      cardColumn.classList.add("row");
      cardColumn.innerHTML = `
        <div class="card">
            <img src="${item.image}" class="card-img-top" alt="${item.title}">
            <div class="card-body">
                <h5 class="card-title">${item.title}</h5>
                <p class="card-price">${item.description}</p>
                <div class="iconBox">
                <p class="card-text">${item.bedrooms} <span class="iconify" data-icon="streamline:travel-hotel-bed-2-bed-double-bedroom-bedrooms-queen-king-full-hotel"></span></p>
                <p class="card-text">${item.bathrooms}<span class="iconify" data-icon="mdi:bathroom"></span></p>
                ${
                  item.garaging
                  ?`<p class="card-text">${item.garaging}<span class="iconify" data-icon="bxs:car-garage"></span></p>`
                  : ""
                }
                <p class="card-text">${item.parking}<span class="iconify" data-icon="bxs:car"></span></p>
                </div>
            </div>
        </div>
    `;
      // Append the card column to the container
      cardContainer.appendChild(cardColumn);
    });
  })
  .catch((error) => console.error("Error fetching data:", error));
