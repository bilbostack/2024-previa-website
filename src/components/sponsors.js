import React from "react"

export default ({ sponsorBlocks }) => {
  const has_sponsors = !!sponsorBlocks
    .map(block => (!block.visible ? 0 : block.sponsors.length))
    .reduce((prev, current) => prev + current, 0)

  return (
    <section id="sponsors">
      <div className="container">
        {has_sponsors && (
          <>
            {sponsorBlocks.map((block, index_block) => {
              if (block.visible)
                return (
                  <div key={index_block} className="list">
                    {block.name && <h3>{block.name}</h3>}
                    {block.sponsors.map((sponsor, index) => (
                      <a
                        key={index}
                        href={sponsor.link}
                        title={sponsor.name}
                        class="item"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={sponsor.image}
                          alt={sponsor.name}
                          style={{
                            height: sponsor.height_em + "em",
                            width: "auto",
                          }}
                        />
                      </a>
                    ))}
                  </div>
                )
            })}
          </>
        )}
      </div>
    </section>
  )
}
