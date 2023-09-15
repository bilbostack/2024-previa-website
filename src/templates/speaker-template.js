import React from "react"
import Meta from "../components/meta"
import Layout from "../components/layout"
import Header from "../components/headerInner"
import Footer from "../components/footer"
import {
  FaArrowLeft,
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaGitlab,
  FaRssSquare,
} from "react-icons/fa"

const SpeakerTemplate = context => {
  const speaker = context.pageContext.speaker

  const configData = context.pageContext.configData

  function bioWithHtml() {
    return { __html: speaker.bio }
  }

  function talkDescriptionWithHtml() {
    return { __html: speaker.talk.description }
  }

  return (
    <Layout>
      <Meta
        title={speaker.name}
        og_title={configData.conference_title + " / " + configData.conference_date}
        og_description="Profesionales referencia del sector tecnológico vendrán a Bilbao a compartir sus conocimientos
              sobre las diferentes temáticas más relevantes en la actualidad."
      />
      <Header data={configData} />

      <section>
        <div className="container">
          <ul class="nav">
            <li class="nav-item">
              <a class="nav-link active" href="/#agenda">
                <FaArrowLeft /> volver a la agenda
              </a>
            </li>
          </ul>
        </div>
      </section>

      <section id="speaker-detail">
        <div className="container">
          <div className="row">
            <div className="col-md-4 text-center">
              <img
                src={speaker.image}
                alt={speaker.name}
                className="img-fluid"
              />
            </div>
            <div className="col-md-8">
              <h1>{speaker.name}</h1>
              <h5>{speaker.company}</h5>
              <p>
                {speaker.social.twitter ? (
                  <a href={speaker.social.twitter} target="_blank" rel="noopener noreferrer">
                    <FaTwitter />
                  </a>
                ) : (
                  ""
                )}
                &nbsp;
                {speaker.social.github ? (
                  <a href={speaker.social.github} target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                  </a>
                ) : (
                  ""
                )}
                &nbsp;
                {speaker.social.gitlab ? (
                  <a href={speaker.social.gitlab} target="_blank" rel="noopener noreferrer">
                    <FaGitlab />
                  </a>
                ) : (
                  ""
                )}
                &nbsp;
                {speaker.social.web ? (
                  <a href={speaker.social.web} target="_blank" rel="noopener noreferrer">
                    <FaRssSquare />
                  </a>
                ) : (
                  ""
                )}
                &nbsp;
                {speaker.social.linkedin ? (
                  <a href={speaker.social.linkedin} target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                  </a>
                ) : (
                  ""
                )}
              </p>

              {speaker.bio ? (
                <div className="block">
                  <h4>Acerca de</h4>
                  <p dangerouslySetInnerHTML={bioWithHtml()}></p>
                </div>
              ) : (
                ""
              )}

              <div className="block">
                <h4>{speaker.talk.title}</h4>
                <p dangerouslySetInnerHTML={talkDescriptionWithHtml()}></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </Layout>
  )
}
export default SpeakerTemplate
