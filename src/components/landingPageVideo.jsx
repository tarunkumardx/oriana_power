import React from "react";

const LandingPageVideo = () => {
  return (
    // <div style={{ marginTop: "-2rem" }}>
    //   <video width="100%" height="100%" autoPlay muted loop>
    //     <source
    //       src="https://www.shutterstock.com/shutterstock/videos/1090773539/preview/stock-footage-ecology-solar-power-station-panels-in-the-fields-green-energy-at-sunset-landscape-electrical.webm"
    //       type="video/webm"
    //     />
    //     Your browser does not support the video tag.
    //   </video>
    //   <div className="mainBannerText">
    //     Goal - <span> Expand renewable</span>
    //     <br />
    //     <span>energy </span>capacity to <strong>10 GW by 2030.</strong>
    //   </div>
    // </div>

    <div style={{ position: "relative", overflow: "hidden" }}>
      <video
        style={{
          width: "100%",
          height: "90vh", // or "100vh" for full height
          objectFit: "cover",
        }}
        autoPlay
        muted
        loop
      >
        <source
          src="https://www.shutterstock.com/shutterstock/videos/1090773539/preview/stock-footage-ecology-solar-power-station-panels-in-the-fields-green-energy-at-sunset-landscape-electrical.webm"
          type="video/webm"
        />
        Your browser does not support the video tag.
      </video>
      <div className="mainBannerText">
        Goal - <span> Expand REnewable</span>
        <br />
        <span>Energy </span>capacity to <strong>10 GW by 2030.</strong>
      </div>
    </div>
  );
};

export default LandingPageVideo;
