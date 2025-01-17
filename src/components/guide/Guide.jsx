import React from "react";
import "./Guide.css";

const Guide = () => {

    // Utility function to convert YouTube watch link to embed link
const getEmbedUrl = (url) => {
    const urlObj = new URL(url);
    if (urlObj.hostname.includes("youtube.com") && urlObj.searchParams.get("v")) {
      return `https://www.youtube.com/embed/${urlObj.searchParams.get("v")}`;
    } else if (urlObj.hostname.includes("youtu.be")) {
      return `https://www.youtube.com/embed${urlObj.pathname}`;
    }
    return url; // Return the original URL if it's not a valid YouTube link
  };
  return (
    <div className="container">
      {/* Main Video Section */}
      <div className="main-video">
        <iframe
          src={getEmbedUrl("https://youtu.be/q7fZDAB4r7w?si=UQ8Dk6ya5kDEW6OO")}
          title="How to Create Multiwallets on EpesiPay"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <h1>How to Create Multiwallets on EpesiPay</h1>
        <p>
          Learn how to create multiple wallets for easy transactions on EpesiPay
          with no extra requirements.
        </p>
        <button className="btn">Watch on YouTube</button>
      </div>

      {/* Sub Videos Section */}
      <div className="sub-videos">
        <div className="sub-container">
            <div className="video-card">
                <h3>How to Register for EpesiPay</h3>
                <p>
                  Learn how to set up your EpesiPay account and integrate it into your
                  business in minutes.
                </p>
            <iframe
                src={getEmbedUrl("https://youtu.be/SYVW4AWp-vI?si=uQ0_5OF_hWds9-zy")}
                title="How to Register for EpesiPay"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
          <button className="btn">Watch on YouTube</button>
        </div>
        <div className="video-card">
            <h3>How to Deposit Money from M-Pesa to EpesiPay</h3>
            <p>
              Understand how you can load your EpesiPay account from M-Pesa with
              no charges.
            </p>
          <iframe
            src={getEmbedUrl("https://youtu.be/3riSk8XQL5g?si=oIeJaXjgYTNqaL13")}
            title="How to Deposit Money from M-Pesa to EpesiPay"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <button className="btn">Watch on YouTube</button>
        </div>
        </div>
        <div className="sub-container-below">
            <div className="video-card">
                <h3>How to Load Money on EpesiPay via QR Code</h3>
                <p>
                Learn how to effortlessly load your EpesiPay wallet with just a single QR code scan.
                </p>
            <iframe
                src={getEmbedUrl("https://youtu.be/_Wpz7Ydsr_E?si=s0-CvBVHtB7mg6lZ")}
                title="How to Load Money on EpesiPay via QR Code"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
            <button className="btn">Watch on YouTube</button>
            </div>
            <div className="video-card">
                <h3>How to send Money on epesipay</h3>
                <p>
                Learn how to send money to other EpesiPay users or to other platforms supported by Epesipay.
                </p>
            <iframe
                src={getEmbedUrl("https://youtu.be/9xpccICqCYo?si=JbKfO2KjKwKh3qyY")}
                title="How to send Money on EpesiPay"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
            <button className="btn">Watch on YouTube</button>
            </div>
        </div> 
      </div>
    </div>
  );
};

export default Guide;