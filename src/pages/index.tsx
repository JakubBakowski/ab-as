import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import NavBar from "./NavBar";

const links = [
  {
    text: "Tutorial",
    url: "https://www.gatsbyjs.com/docs/tutorial/getting-started/",
    description:
      "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
    color: "#E95800",
  },
];

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <NavBar />
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
