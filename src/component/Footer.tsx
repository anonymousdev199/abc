import React from "react";
import { TOKEN_SYMBOL, dex, telegram, twitter } from "./Header";

interface Props {}
export const Footer: React.FC<Props> = () => {
  return (
    <div
      className="elementor-element elementor-element-b309881 e-flex e-con-boxed e-con e-parent e-lazyloaded"
      data-id="b309881"
      data-element_type="container"
      data-settings='{"background_background":"classic"}'
    >
      <div className="e-con-inner">
        <div
          className="elementor-element elementor-element-e9ccbb6 elementor-shape-rounded elementor-grid-0 e-grid-align-center elementor-widget elementor-widget-social-icons"
          data-id="e9ccbb6"
          data-element_type="widget"
          data-widget_type="social-icons.default"
        >
          <div className="elementor-widget-container">
            <div className="space-x-3">
              <span className="elementor-grid-item">
                <a
                  className="elementor-icon elementor-social-icon elementor-social-icon-x-twitter elementor-repeater-item-eee8215"
                  href={twitter}
                  target="_blank"
                >
                  <span className="elementor-screen-only">X-twitter</span>
                  <svg
                    className="e-font-icon-svg e-fab-x-twitter"
                    viewBox="0 0 512 512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                  </svg>{" "}
                </a>
              </span>
              <span className="elementor-grid-item">
                <a
                  className="elementor-icon elementor-social-icon elementor-social-icon-telegram elementor-repeater-item-750dd37"
                  href={telegram}
                  target="_blank"
                >
                  <span className="elementor-screen-only">Telegram</span>
                  <svg
                    className="e-font-icon-svg e-fab-telegram"
                    viewBox="0 0 496 512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm121.8 169.9l-40.7 191.8c-3 13.6-11.1 16.9-22.4 10.5l-62-45.7-29.9 28.8c-3.3 3.3-6.1 6.1-12.5 6.1l4.4-63.1 114.9-103.8c5-4.4-1.1-6.9-7.7-2.5l-142 89.4-61.2-19.1c-13.3-4.2-13.6-13.3 2.8-19.7l239.1-92.2c11.1-4 20.8 2.7 17.2 19.5z" />
                  </svg>{" "}
                </a>
              </span>
              <span className="elementor-grid-item">
                <a
                  className="elementor-icon elementor-social-icon elementor-social-icon- elementor-repeater-item-e016950"
                  href={dex}
                  target="_blank"
                >
                  <span className="elementor-screen-only" />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    fill="#fff"
                    fillRule="evenodd"
                    viewBox="0 0 252 300"
                    className="chakra-icon custom-euf446"
                  >
                    <path d="M151.818 106.866c9.177-4.576 20.854-11.312 32.545-20.541 2.465 5.119 2.735 9.586 1.465 13.193-.9 2.542-2.596 4.753-4.826 6.512-2.415 1.901-5.431 3.285-8.765 4.033-6.326 1.425-13.712.593-20.419-3.197m1.591 46.886l12.148 7.017c-24.804 13.902-31.547 39.716-39.557 64.859-8.009-25.143-14.753-50.957-39.556-64.859l12.148-7.017a5.95 5.95 0 003.84-5.845c-1.113-23.547 5.245-33.96 13.821-40.498 3.076-2.342 6.434-3.518 9.747-3.518s6.671 1.176 9.748 3.518c8.576 6.538 14.934 16.951 13.821 40.498a5.95 5.95 0 003.84 5.845zM126 0c14.042.377 28.119 3.103 40.336 8.406 8.46 3.677 16.354 8.534 23.502 14.342 3.228 2.622 5.886 5.155 8.814 8.071 7.897.273 19.438-8.5 24.796-16.709-9.221 30.23-51.299 65.929-80.43 79.589-.012-.005-.02-.012-.029-.018-5.228-3.992-11.108-5.988-16.989-5.988s-11.76 1.996-16.988 5.988c-.009.005-.017.014-.029.018-29.132-13.66-71.209-49.359-80.43-79.589 5.357 8.209 16.898 16.982 24.795 16.709 2.929-2.915 5.587-5.449 8.814-8.071C69.31 16.94 77.204 12.083 85.664 8.406 97.882 3.103 111.959.377 126 0m-25.818 106.866c-9.176-4.576-20.854-11.312-32.544-20.541-2.465 5.119-2.735 9.586-1.466 13.193.901 2.542 2.597 4.753 4.826 6.512 2.416 1.901 5.432 3.285 8.766 4.033 6.326 1.425 13.711.593 20.418-3.197" />
                    <path d="M197.167 75.016c6.436-6.495 12.107-13.684 16.667-20.099l2.316 4.359c7.456 14.917 11.33 29.774 11.33 46.494l-.016 26.532.14 13.754c.54 33.766 7.846 67.929 24.396 99.193l-34.627-27.922-24.501 39.759-25.74-24.231L126 299.604l-41.132-66.748-25.739 24.231-24.501-39.759L0 245.25c16.55-31.264 23.856-65.427 24.397-99.193l.14-13.754-.016-26.532c0-16.721 3.873-31.578 11.331-46.494l2.315-4.359c4.56 6.415 10.23 13.603 16.667 20.099l-2.01 4.175c-3.905 8.109-5.198 17.176-2.156 25.799 1.961 5.554 5.54 10.317 10.154 13.953 4.48 3.531 9.782 5.911 15.333 7.161 3.616.814 7.3 1.149 10.96 1.035-.854 4.841-1.227 9.862-1.251 14.978L53.2 160.984l25.206 14.129a41.926 41.926 0 015.734 3.869c20.781 18.658 33.275 73.855 41.861 100.816 8.587-26.961 21.08-82.158 41.862-100.816a41.865 41.865 0 015.734-3.869l25.206-14.129-32.665-18.866c-.024-5.116-.397-10.137-1.251-14.978 3.66.114 7.344-.221 10.96-1.035 5.551-1.25 10.854-3.63 15.333-7.161 4.613-3.636 8.193-8.399 10.153-13.953 3.043-8.623 1.749-17.689-2.155-25.799l-2.01-4.175z" />
                  </svg>{" "}
                </a>
              </span>
            </div>
          </div>
        </div>
        <div
          className="elementor-element elementor-element-7444d45 elementor-widget__width-initial elementor-widget elementor-widget-heading"
          data-id="7444d45"
          data-element_type="widget"
          data-widget_type="heading.default"
        >
          <div className="elementor-widget-container">
            <style
              dangerouslySetInnerHTML={{
                __html:
                  "/*! elementor - v3.21.0 - 08-05-2024 */\n.elementor-heading-title{padding:0;margin:0;line-height:1}.elementor-widget-heading .elementor-heading-title[class*=elementor-size-]>a{color:inherit;font-size:inherit;line-height:inherit}.elementor-widget-heading .elementor-heading-title.elementor-size-small{font-size:15px}.elementor-widget-heading .elementor-heading-title.elementor-size-medium{font-size:19px}.elementor-widget-heading .elementor-heading-title.elementor-size-large{font-size:29px}.elementor-widget-heading .elementor-heading-title.elementor-size-xl{font-size:39px}.elementor-widget-heading .elementor-heading-title.elementor-size-xxl{font-size:59px}",
              }}
            />
            <span className="elementor-heading-title elementor-size-default">
              <b>DISCLAIMER:</b> ${TOKEN_SYMBOL} IS A MEMECOIN AND HAS NO UTILITY. DON'T
              RISK MONEY YOU ARE AFRAID OF LOSING. THE PRICE MAY GO UP OR IT
              MAY GO DOWN. WE ARE NOT RESPONSIBLE FOR THE PRICE OF THE TOKEN.
            </span>{" "}
          </div>
        </div>
        <div
          className="elementor-element elementor-element-95e78a1 e-flex e-con-boxed e-con e-child"
          data-id="95e78a1"
          data-element_type="container"
        >
          <div className="e-con-inner">
            <div
              className="elementor-element elementor-element-fac8103 e-flex e-con-boxed e-con e-child"
              data-id="fac8103"
              data-element_type="container"
            >
              <div className="e-con-inner">
                <div
                  className="elementor-element elementor-element-fe2d992 elementor-widget elementor-widget-image"
                  data-id="fe2d992"
                  data-element_type="widget"
                  data-widget_type="image.default"
                >
                  <div className="elementor-widget-container">
                    <a href="https://x.com/Cryptohid2021" target="_blank">
                      <img
                        loading="lazy"
                        decoding="async"
                        width={150}
                        height={150}
                        src="https://gib.onsol.live/wp-content/uploads/2024/05/profile-cryptohid-150x150.jpg"
                        className="attachment-thumbnail size-thumbnail wp-image-227"
                        alt=""
                        srcSet="https://gib.onsol.live/wp-content/uploads/2024/05/profile-cryptohid-150x150.jpg 150w, https://gib.onsol.live/wp-content/uploads/2024/05/profile-cryptohid-300x300.jpg 300w, https://gib.onsol.live/wp-content/uploads/2024/05/profile-cryptohid.jpg 400w"
                        sizes="(max-width: 150px) 100vw, 150px"
                      />{" "}
                    </a>
                  </div>
                </div>
                <div
                  className="elementor-element elementor-element-18d6a43 elementor-widget elementor-widget-heading"
                  data-id="18d6a43"
                  data-element_type="widget"
                  data-widget_type="heading.default"
                >
                  <div className="elementor-widget-container">
                    <span className="elementor-heading-title elementor-size-default">
                      <a href="https://x.com/Cryptohid2021" target="_blank">
                        Designed by Cryptohid
                      </a>
                    </span>{" "}
                  </div>
                </div>
              </div>
            </div>
            <div
              className="elementor-element elementor-element-4dd9195 e-flex e-con-boxed e-con e-child"
              data-id="4dd9195"
              data-element_type="container"
            >
              <div className="e-con-inner">
                <div
                  className="elementor-element elementor-element-45ea722 elementor-widget elementor-widget-heading"
                  data-id="45ea722"
                  data-element_type="widget"
                  data-widget_type="heading.default"
                >
                  <div className="elementor-widget-container">
                    <span className="elementor-heading-title elementor-size-default">
                      ©2024 ${TOKEN_SYMBOL} Community, All Right Reserved.
                    </span>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
