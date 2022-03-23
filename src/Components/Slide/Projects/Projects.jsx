import React from "react";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";

import { MainHeadingWrapper } from "../../Elements/Elements";
import ProjectCard from "./ProjectCard";
import ProjectDetail from "./ProjectDetail";

const useStyles = makeStyles((theme) => ({
  root: {
    overflowY: "scroll",
    padding: "100px 0 ",
  },
}));

const BridgeTwo = styled.div`
  padding-top: 75px;
  width: 100%;
  margin: 0 auto;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.fontColor};

  /* min-height: 400px; */
  z-index: 99;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  > div:nth-child(2) {
    padding: 50px 0;
    border-radius: 5px;
    display: flex;
    flex-wrap: wrap;
    grid-row-gap: 20px;
    width: 90%;
    margin: 30px auto;
    align-items: center;
    justify-content: space-evenly;
    background-size: cover;
    background-position: center;
  }
`;

let projectArray = [
  {
    img: "https://user-images.githubusercontent.com/95961486/158548097-5dca4d42-b32f-4691-a7d8-d77fade3580e.png",
    title: "Clone of Adidas.com",
    description:
      "An E-commerce website to purchase clothes and grooming products.",
    techStack: [
      "HTML",
      "CSS",
      "JavaScript",
    ],
    repoLink: "https://github.com/haldaranup/adidas-clone",
    demoLink: "https://adidas-clone12.netlify.app",
    type: "A collaborative project built by a team of 6 members under 6 days.",
    blogLink: "https://medium.com/@shashank0194/your-ev-assistant-a1b1910297fe",
    features: [
      "User can switch between prices in product page from high to low and low to high",
      "User can also find the particular product by entering the name in the search bar",
      "User can access the product size and color through the product information page",
      "User can add the product to the cart",
      "Checkout page",
    ],
    responsibilities: [
      "Developed the frontend end which includes the Landing page with all the functionalities",
      "Developed the checkout page",
      "collaboratively built product information page",
      "Integrated all the pages of website for Deploying the website",
    ],
  },
  {
    img: "https://user-images.githubusercontent.com/96103401/158480446-019e5baa-b08a-4a40-a91d-0bcbb0a7cac9.png",
    title: "Clone of Firstcry.com.",
    description: "A website to purchase all newborn related products.",
    techStack: [
      "HTML",
      "CSS",
      "JavaScript",
      // "NextJs",
      "Node",
      "Express",
      "MongoDB",
    ],
    repoLink: "https://github.com/unnati1004/firstcry",
    demoLink: "https://firstcry.vercel.app/",
    type: "A collaborative project built by a team of 6 members under 6 days.",
    blogLink:
      "https://medium.com/@ossalunkhe09/cloning-firstcry-website-cf13071992cf",
    features: [
      "Carousel in landing page",
      "User can switch between prices in the product page from high to low and low to high",
      "User can add the product in the shortlist page & also in cart ",
      "Payment Gateway",
    ],
    responsibilities: [
      "Developed the Shortlist page",
      "Developed backend server with products data",
      "Created an API to fetch the products from backend server",
      "Contributed greatly towards the development of the cart page",
      "Collaboratively built the product page",
    ],
  }
];

function Projects() {
  const [panel, setPanel] = React.useState(false);
  let [currentProject, setCurrentProject] = React.useState({});
  const classes = useStyles();
  return (
    <div id="projects">
      <BridgeTwo backgroundImg={currentProject.img}>
        <MainHeadingWrapper>
          <h1>Projects</h1>
          <div></div>
        </MainHeadingWrapper>
        <div>
          {projectArray?.map((project) => (
            <ProjectCard
              key={project.title}
              setCurrentProject={setCurrentProject}
              setPanel={setPanel}
              {...project}
            ></ProjectCard>
          ))}
        </div>
        <Modal
          className={classes.root}
          open={panel}
          onClose={() => setPanel(false)}
        >
          <ProjectDetail
            {...currentProject}
            setPanel={setPanel}
          ></ProjectDetail>
        </Modal>
      </BridgeTwo>
    </div>
  );
}

export default Projects;
