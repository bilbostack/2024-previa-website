import React from "react"

const HeaderHome = ({ data }) => {
  function claimWithHtml() {
    return { __html: data.conference_claim }
  }

  return (
    <header id="front-header">
      <div className="cover"></div>
      <div className="content">
        <div class="container text-center">
          <div class="logo">
            <span>previa</span>&nbsp;
            <img id="logo" src={data.logo} alt={data.conference_name} />
          </div>
          <h1 class="display-4" dangerouslySetInnerHTML={claimWithHtml()}></h1>
          <p class="lead">{data.conference_date}</p>

          <div class={data.header_banner.cta_visible === true ? "" : "hidden"}>
            <p>{data.header_banner.cta_pre_text}</p>
            <a
              class="btn btn-primary btn-lg"
              href={data.header_banner.cta_url}
              role="button"
              target="_blank"
              rel="noopener noreferrer"
            >
              {data.header_banner.cta_text}
            </a>
            <p><br />{data.header_banner.cta_post_text}</p>
          </div>
          <br />
          <div id="hashtag">
            <h5>
              <p>
                ¿Quieres ver también la agenda de <span>{data.main_conference_hashtag}</span>?&nbsp;
                👉 <a href="https://bilbostack.com/" 
                  target="_blank" 
                  rel="noopener noreferrer">
                     ¡Clicka aquí!
                </a> 👈
              </p>
            </h5>
          </div>
        </div>
      </div>
    </header>
  )
}

export default HeaderHome;
