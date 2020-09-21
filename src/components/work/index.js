import React from "react";

import reddit from "../../assets/projects/reddit.png";
import covindia from "../../assets/projects/covindia.PNG";
import poketwo from "../../assets/projects/poketwo.PNG";
import erasto from "../../assets/projects/erasto.png";
import mail from "../../assets/projects/mail.png";

import ProjectCard from "../project-card";

const projects = [
  {
    title: "Covindia",
    type: "Open Source",
    content:
      "Real time district wise tracker for the Corona virus spread in India. Caddy, Flask and gunicorn on the backend with Travis CI. Implemented load balancing and reverse proxies for scalability",
    repo: "https://github.com/covindia/CovIndia-Website",

    bg: covindia,
  },
  {
    title: "Erastothenes",
    type: "Open Source",
    content:
      "Erastothenes is a discord bot made primarily to track the individual option trading performance of members in a server over time, based on the callouts that they've made. ",
    repo: "https://github.com/covindia/erastothenes",

    bg: erasto,
  },
  {
    title: "Euclid",
    type: "Open Source",
    content: "Multi purpose Reddit data mining bot",
    repo: "https://github.com/covindia/euclid",

    bg: reddit,
  },
  {
    title: "Poketwo",
    type: "Open Source",
    content: "Multiplayer pokemon battle simulator, built using websockets.",
    repo: "https://github.com/covindia/CovIndia-Website",

    bg: poketwo,
  },
  {
    title: "qFeedbacker",
    type: "Open Source",
    content:
      "Batch email survey webapp, powered by stripe for payments, Google OAuth and webhooks for collecting surveys.",
    repo: "https://github.com/qurram-zaheer/qfeedbacker",

    bg: mail,
  },
];

const Work = () => {
  return (
    <div className="h-full">
      <div className="grid relative h-full grid-cols-2 lg:grid-cols-3 py-48 px-4 lg:px-16 gap-4">
        {projects.map((project, index) => {
          return (
            <ProjectCard
              {...project}
              key={project.title}
              delay={(index + 1) * 200}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Work;
