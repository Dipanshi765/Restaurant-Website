import React from "react";
import Layout from "./../components/Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h4">Welcome To My Resturant</Typography>
        <p>
        Dear Esteemed Guests,

Welcome to our restaurant, an oasis of gastronomic delight nestled in the vibrant heart of Noida . At SWAAD, we are thrilled to extend our heartfelt greetings and invite you to embark on a culinary journey like no other.

From the moment you step into our charming establishment, you're not just a guest; you become an integral part of our culinary story. It is our utmost pleasure to have you here, and we are dedicated to providing you with an extraordinary dining experience that exceeds your expectations.

Our commitment to excellence is evident in every facet of what we do. Our menu is a testament to our passion for flavors, celebrating the finest locally sourced ingredients combined with innovative culinary techniques. Whether you have an adventurous palate or prefer time-honored classics, our diverse menu offerings are crafted to cater to every taste.


        </p>
        <br />
        <p>
        As you settle into our inviting ambiance, you'll discover that our restaurant is not merely a place to eat; it's a space where memories are created. The warmth exuded by our attentive and dedicated team ensures that your dining experience goes beyond exceptional cuisine. It's about cultivating an atmosphere where you feel welcomed, valued, and, most importantly, at home.

Be it a casual luncheon, a romantic dinner, or a celebratory gathering, every moment spent here is designed to enchant. Our cozy interiors, adorned with tasteful decor, create an inviting environment for conversations to flow and flavors to flourish.

We take immense pride in curating a dining experience that caters to every aspect of your visit. From the precision in service to the artistry on your plate, our team endeavors to make each visit memorable. Your satisfaction is our priority, and we aim to surpass your expectations in every way possible.

Thank you for choosing to grace us with your presence. We are genuinely honored to have you dine with us and are excited to embark on this culinary journey together. Prepare to indulge in a symphony of flavors, embrace the joy of good company, and savor every moment at [Restaurant Name].

Once again, welcome to our restaurant. Your table is set, and an extraordinary experience awaits you.

        </p>
      </Box>
    </Layout>
  );
};

export default About;
