import React from "react";

interface Props {}

const GibbyFriends = [
  {
    isGibby: true,
    src: "./images/gib-transparent.png",
    name: "GIBBY",
    class: "gibby"
  },
  {
    isGibby: false,
    src: "./images/shadow.jpg",
    name: "SHADOW",
    class: "shadow"
  },
  {
    isGibby: false,
    src: "./images/nate-rivers.webp",
    name: "NATE RIVERS",
    class: "nate"
  },
  {
    isGibby: false,
    src: "./images/god-sol2.webp",
    name: "GOD.SOL",
    class: "god-sol"
  },
  {
    isGibby: false,
    src: "./images/threadguy3.webp",
    name: "THREADGUY",
    class: "threadguy"
  },
];

const Backgrounds = [
  "./images/cinema.webp",
  "./images/street.webp",
  "./images/stonks.webp",
  "./images/jungle.webp",
  "./images/hell.webp",
  "./images/concert.webp",
  "./images/club2.webp",
  "./images/beach.webp",
  "./images/bar.webp",
  "./images/gib-bg.webp",
  "./images/moon.webp",
  "./images/meme-bg.webp",
  "./images/time-magzine.png",
  "./images/vouge.webp",
  "./images/banana-bg.webp",
  "./images/bg1.webp",
  "./images/main-bg.webp",
];

const Hats = [
  "./images/wifhat.webp",
  "./images/ansem-hat.webp",
  "./images/maga-hat.png",
  "./images/chug-life-hat.webp",
  "./images/bannana-hat.webp",
  "./images/beanie-hat.webp",
  "./images/bucket-hat.webp",
  "./images/fedora-hat.webp",
  "./images/russian-hat.webp",
  "./images/wig-hair.webp",
  "./images/bb-hat.webp",
  "./images/devil.webp",
  "./images/peaky-hat.webp",
  "./images/bowler-hat.webp",
  "./images/bananna-hat.png",
  "./images/mac-hat2.png",
  "./images/crown-v1.png",
];

const Faces = [
  "./images/joker2.webp",
  "./images/3d-glass.webp",
  "./images/laser-eyes.png",
  "./images/ar-glass.png",
  "./images/glass2-1.png",
  "./images/mouth2.png",
  "./images/gib-glass.png",
  "./images/pit-viper.webp",
  "./images/sunglass-v1.png",
];

const Mouths = [
  "./images/mouth2-1.png",
  "./images/mouth3.png",
  "./images/mouth1.webp",
];

const RightHands = [
  "./images/popcorn.webp",
  "./images/diamond-hand.webp",
  "./images/diamond.webp",
  "./images/harambe.webp",
  "./images/jazz.png",
  "./images/trumpbanana.png",
  "./images/banana-hand.webp",
  "./images/tissue.webp",
  "./images/kitten.webp",
  "./images/zyn.webp",
  "./images/mcd.webp",
  "./images/purse.webp",
  "./images/celcius.webp",
  "./images/bunny.webp",
  "./images/beer.webp",
  "./images/sub.webp",
  "./images/gun2.png",
];

const UpperOutfits = [
  "./images/angle-wings.webp",
  "./images/harambe-shirt.webp",
  "./images/suit.webp",
  "./images/striped-shirt.webp",
  "./images/overalls.webp",
  "./images/hoodie.webp",
  "./images/dress.webp",
  "./images/cholo.webp",
  "./images/clothes2.webp",
  "./images/clothes1.png",
];

const LowerOutfits: any[] = [];

export const Content: React.FC<Props> = () => {
  return (
    <div
      className="elementor-element elementor-element-96cb4f1 e-con-full e-flex e-con e-child"
      data-id="96cb4f1"
      data-element_type="container"
    >
      <div
        className="elementor-element elementor-element-4bb1cb8 elementor-widget elementor-widget-html"
        data-id="4bb1cb8"
        data-element_type="widget"
        data-widget_type="html.default"
      >
        <div className="elementor-widget-container">
          <main className="generator-container">
            <section className="controller">
              <h1 className="title">Meme Gibber</h1>
              {/* Gibby */}
              <div className="wrapper gibby_wrapper">
                <div className="header">
                  <span className="sub_title">Gibby &amp; Friends</span>
                </div>
                <div className="list">
                  {GibbyFriends.map((item) => (
                    <div
                      key={item.name}
                      className={`list_item ${
                        item.isGibby ? "" : "influencer"
                      } ${item.class} selected_item`}
                    >
                      <img
                        decoding="async"
                        width={600}
                        height={600}
                        src={item.src}
                        className="attachment-meme size-meme wp-post-image"
                        alt="Gib Transparent BG"
                      />
                      <span className="title">{item.name}</span>
                    </div>
                  ))}
                </div>
                <div className="btn-nav-previous" style={{ fill: "#FFF" }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={32}
                    height={32}
                    viewBox="0 0 24 24"
                  >
                    <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
                    <path d="M0 0h24v24H0z" fill="none" />
                  </svg>
                </div>
                <div className="btn-nav-next">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={32}
                    height={32}
                    viewBox="0 0 24 24"
                  >
                    <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                    <path d="M0 0h24v24H0z" fill="none" />
                  </svg>
                </div>
              </div>
              {/* Background */}
              <div className="wrapper background_wrapper">
                <div className="header">
                  <span className="sub_title">Background</span>
                </div>
                <div className="list">
                  <div className="list_item selected_item">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 1024 1024"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372 0-89 31.3-170.8 83.5-234.8l523.3 523.3C682.8 852.7 601 884 512 884zm288.5-137.2L277.2 223.5C341.2 171.3 423 140 512 140c205.4 0 372 166.6 372 372 0 89-31.3 170.8-83.5 234.8z" />
                    </svg>
                  </div>
                  {Backgrounds.map((item) => (
                    <div className="list_item" key={item}>
                      <img
                        loading="lazy"
                        decoding="async"
                        width={600}
                        height={600}
                        src={item}
                        className="attachment-meme size-meme wp-post-image"
                        alt=""
                        sizes="(max-width: 600px) 100vw, 600px"
                      />
                    </div>
                  ))}
                </div>
                <div className="btn-nav-previous" style={{ fill: "#FFF" }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={32}
                    height={32}
                    viewBox="0 0 24 24"
                  >
                    <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
                    <path d="M0 0h24v24H0z" fill="none" />
                  </svg>
                </div>
                <div className="btn-nav-next">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={32}
                    height={32}
                    viewBox="0 0 24 24"
                  >
                    <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                    <path d="M0 0h24v24H0z" fill="none" />
                  </svg>
                </div>
              </div>
              {/* Hat */}
              <div className="wrapper hat_wrapper">
                <div className="header">
                  <span className="sub_title">Hat</span>
                </div>
                <div className="list">
                  <div className="list_item selected_item">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 1024 1024"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372 0-89 31.3-170.8 83.5-234.8l523.3 523.3C682.8 852.7 601 884 512 884zm288.5-137.2L277.2 223.5C341.2 171.3 423 140 512 140c205.4 0 372 166.6 372 372 0 89-31.3 170.8-83.5 234.8z" />
                    </svg>
                  </div>
                  {Hats.map((item) => (
                    <div className="list_item" key={item}>
                      <img
                        loading="lazy"
                        decoding="async"
                        width={600}
                        height={600}
                        src={item}
                        className="attachment-meme size-meme wp-post-image"
                        alt=""
                        sizes="(max-width: 600px) 100vw, 600px"
                      />
                    </div>
                  ))}
                </div>
                <div className="btn-nav-previous" style={{ fill: "#FFF" }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={32}
                    height={32}
                    viewBox="0 0 24 24"
                  >
                    <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
                    <path d="M0 0h24v24H0z" fill="none" />
                  </svg>
                </div>
                <div className="btn-nav-next">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={32}
                    height={32}
                    viewBox="0 0 24 24"
                  >
                    <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                    <path d="M0 0h24v24H0z" fill="none" />
                  </svg>
                </div>
              </div>
              {/* Face */}
              <div className="wrapper face_wrapper">
                <div className="header">
                  <span className="sub_title">Face</span>
                </div>
                <div className="list">
                  <div className="list_item selected_item">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 1024 1024"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372 0-89 31.3-170.8 83.5-234.8l523.3 523.3C682.8 852.7 601 884 512 884zm288.5-137.2L277.2 223.5C341.2 171.3 423 140 512 140c205.4 0 372 166.6 372 372 0 89-31.3 170.8-83.5 234.8z" />
                    </svg>
                  </div>
                  {Faces.map((item) => (
                    <div className="list_item" key={item}>
                      <img
                        loading="lazy"
                        decoding="async"
                        width={600}
                        height={600}
                        src={item}
                        className="attachment-meme size-meme wp-post-image"
                        alt=""
                        sizes="(max-width: 600px) 100vw, 600px"
                      />
                    </div>
                  ))}
                </div>
                <div className="btn-nav-previous" style={{ fill: "#FFF" }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={32}
                    height={32}
                    viewBox="0 0 24 24"
                  >
                    <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
                    <path d="M0 0h24v24H0z" fill="none" />
                  </svg>
                </div>
                <div className="btn-nav-next">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={32}
                    height={32}
                    viewBox="0 0 24 24"
                  >
                    <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                    <path d="M0 0h24v24H0z" fill="none" />
                  </svg>
                </div>
              </div>
              {/* Mouth */}
              <div className="wrapper mouth_wrapper">
                <div className="header">
                  <span className="sub_title">Mouth</span>
                </div>
                <div className="list">
                  <div className="list_item selected_item">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 1024 1024"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372 0-89 31.3-170.8 83.5-234.8l523.3 523.3C682.8 852.7 601 884 512 884zm288.5-137.2L277.2 223.5C341.2 171.3 423 140 512 140c205.4 0 372 166.6 372 372 0 89-31.3 170.8-83.5 234.8z" />
                    </svg>
                  </div>
                  {Mouths.map((item) => (
                    <div className="list_item" key={item}>
                      <img
                        loading="lazy"
                        decoding="async"
                        width={600}
                        height={600}
                        src={item}
                        className="attachment-meme size-meme wp-post-image"
                        alt=""
                        sizes="(max-width: 600px) 100vw, 600px"
                      />
                    </div>
                  ))}
                </div>
                <div className="btn-nav-previous" style={{ fill: "#FFF" }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={32}
                    height={32}
                    viewBox="0 0 24 24"
                  >
                    <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
                    <path d="M0 0h24v24H0z" fill="none" />
                  </svg>
                </div>
                <div className="btn-nav-next">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={32}
                    height={32}
                    viewBox="0 0 24 24"
                  >
                    <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                    <path d="M0 0h24v24H0z" fill="none" />
                  </svg>
                </div>
              </div>
              {/* Right Hand */}
              <div className="wrapper righthand_wrapper">
                <div className="header">
                  <span className="sub_title">Right Hand</span>
                </div>
                <div className="list">
                  <div className="list_item selected_item">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 1024 1024"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372 0-89 31.3-170.8 83.5-234.8l523.3 523.3C682.8 852.7 601 884 512 884zm288.5-137.2L277.2 223.5C341.2 171.3 423 140 512 140c205.4 0 372 166.6 372 372 0 89-31.3 170.8-83.5 234.8z" />
                    </svg>
                  </div>
                  {RightHands.map((item) => (
                    <div className="list_item" key={item}>
                      <img
                        loading="lazy"
                        decoding="async"
                        width={600}
                        height={600}
                        src={item}
                        className="attachment-meme size-meme wp-post-image"
                        alt=""
                        sizes="(max-width: 600px) 100vw, 600px"
                      />
                    </div>
                  ))}
                </div>
                <div className="btn-nav-previous" style={{ fill: "#FFF" }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={32}
                    height={32}
                    viewBox="0 0 24 24"
                  >
                    <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
                    <path d="M0 0h24v24H0z" fill="none" />
                  </svg>
                </div>
                <div className="btn-nav-next">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={32}
                    height={32}
                    viewBox="0 0 24 24"
                  >
                    <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                    <path d="M0 0h24v24H0z" fill="none" />
                  </svg>
                </div>
              </div>
              {/* Upper Outfit */}
              <div className="wrapper upperoutfit_wrapper">
                <div className="header">
                  <span className="sub_title">Upper Outfit</span>
                </div>
                <div className="list">
                  <div className="list_item selected_item">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 1024 1024"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372 0-89 31.3-170.8 83.5-234.8l523.3 523.3C682.8 852.7 601 884 512 884zm288.5-137.2L277.2 223.5C341.2 171.3 423 140 512 140c205.4 0 372 166.6 372 372 0 89-31.3 170.8-83.5 234.8z" />
                    </svg>
                  </div>
                  {UpperOutfits.map((item) => (
                    <div className="list_item" key={item}>
                      <img
                        loading="lazy"
                        decoding="async"
                        width={600}
                        height={600}
                        src={item}
                        className="attachment-meme size-meme wp-post-image"
                        alt=""
                        sizes="(max-width: 600px) 100vw, 600px"
                      />
                    </div>
                  ))}
                </div>
                <div className="btn-nav-previous" style={{ fill: "#FFF" }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={32}
                    height={32}
                    viewBox="0 0 24 24"
                  >
                    <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
                    <path d="M0 0h24v24H0z" fill="none" />
                  </svg>
                </div>
                {LowerOutfits.map((item) => (
                  <div className="list_item" key={item}>
                    <img
                      loading="lazy"
                      decoding="async"
                      width={600}
                      height={600}
                      src={item}
                      className="attachment-meme size-meme wp-post-image"
                      alt=""
                      sizes="(max-width: 600px) 100vw, 600px"
                    />
                  </div>
                ))}
                <div className="btn-nav-next">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={32}
                    height={32}
                    viewBox="0 0 24 24"
                  >
                    <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                    <path d="M0 0h24v24H0z" fill="none" />
                  </svg>
                </div>
              </div>
              {/* Lower Outfit */}
              <div className="wrapper loweroutfit_wrapper">
                <div className="header">
                  <span className="sub_title">Lower Outfit</span>
                </div>
                <div className="list">
                  <div className="list_item selected_item">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 1024 1024"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372 0-89 31.3-170.8 83.5-234.8l523.3 523.3C682.8 852.7 601 884 512 884zm288.5-137.2L277.2 223.5C341.2 171.3 423 140 512 140c205.4 0 372 166.6 372 372 0 89-31.3 170.8-83.5 234.8z" />
                    </svg>
                  </div>
                </div>
                <div className="btn-nav-previous" style={{ fill: "#FFF" }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={32}
                    height={32}
                    viewBox="0 0 24 24"
                  >
                    <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
                    <path d="M0 0h24v24H0z" fill="none" />
                  </svg>
                </div>
                <div className="btn-nav-next">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={32}
                    height={32}
                    viewBox="0 0 24 24"
                  >
                    <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                    <path d="M0 0h24v24H0z" fill="none" />
                  </svg>
                </div>
              </div>
            </section>
            <div className="canvas_container">
              <canvas id="canvas" />
              <img
                decoding="async"
                className="downloadImg disp-none"
                src="/"
                alt="canvas"
              />
              <div className="cta">
                <button className="btn square_btn generate"> Random </button>
                <button className="btn square_btn download"> Download </button>
                <button className="btn square_btn reset"> Reset </button>
              </div>
            </div>
          </main>{" "}
        </div>
      </div>
    </div>
  );
};
