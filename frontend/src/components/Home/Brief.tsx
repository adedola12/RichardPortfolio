import React from "react";
import { FaIcons } from "react-icons/fa6";

const Brief = () => {
  return (
    <div>
      <div>
        <h2>How about a brief</h2>
        <p>Brief introduction</p>
      </div>

      <div>
        <div>
          <p>
            Design, for me, is simply giving life to the many <br />
            ideas constantly buzzing in my head. I love to <br />
            draw, play with colors, and explore the endless <br />
            possibilities that come from starting with a blank <br />
            canvas.
          </p>

          <p>
            I’m a multidisciplinary designer, and I’ve been on this roller{" "}
            <br />
            coaster for about 6 years now. My style has always been “Well, I{" "}
            <br />
            think I can, so let’s try,” and that mindset has helped me pick up{" "}
            <br />
            skills across different design niches. <br />
          </p>

          <p>
            Over the years, I’ve had the chance to bring brands to life,
            <br />
            collaborate with national organizations both locally and
            <br />
            internationally, and just enjoy the process of creating.
            <br />
          </p>
        </div>

        {/* Image Section */}

        <div>
          <div>
            <img />
          </div>
          <div>
            <img />
          </div>
          <div>
            <img />
          </div>
        </div>

        {/* TEXT SECTION */}

        <div>
          <div>
            <p>
              I’ve also worked across different teams, building my soft skills
              and doing my best to make sure my designs solve real
              problems—because at the end of the day, isn’t that what design is
              all about?
            </p>
            <p>
              And since I find the construction industry super fascinating (I
              studied Quantity Surveying, by the way), I like to think I’m
              discovering my purpose in connecting design and construction…
            </p>
            <p>or maybe it’s the other way around.</p>
          </div>

          <div>
            <button>
              {" "}
              <FaIcons /> Download Resume
            </button>
            <div>
              <button>
                <FaIcons icon="fa6-brands:linkedin" />
              </button>
              <button>
                <FaIcons icon="fa6-brands:facebook" />
              </button>
              <button>
                <FaIcons icon="fa6-brands:twitter" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div>
        <button> Take a quick detour </button>
      </div>
    </div>
  );
};

export default Brief;
