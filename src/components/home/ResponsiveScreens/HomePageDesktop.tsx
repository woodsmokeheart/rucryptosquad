import React, { useCallback, useEffect, useState } from "react";
import LinkButton from "../LinkButton/LinkButton";
import Background from "../Background/Background";
import Water from "@/components/Water/Water";
import Footer from "../Footer/Footer";
import Header from "@/components/Header/Header";
import Loader from "@/components/Loader/Loader";

const HomePageDesktop = () => {
  const [isLoading, setIsLoading] = useState(
    !sessionStorage.getItem("visited")
  );

  const [appear, setAppear] = useState(false);

  const showButtonsTimeoutFn = useCallback(() => {
    setAppear(true);
    const timeout = setTimeout(() => {
      setAppear(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    showButtonsTimeoutFn();
  }, [showButtonsTimeoutFn]);

  const handleLoaderClose = () => {
    setIsLoading(false);
    sessionStorage.setItem("visited", "true");
  };

  return (
    <React.Fragment>
      {isLoading ? (
        <Loader
          title="Welcome to Ethereon"
          glitch="Welcome to Ethereon"
          onClose={handleLoaderClose}
        />
      ) : (
        <>
          <Header />
          <LinkButton
            link="/about_us"
            classNames="about"
            position="about_position"
            appear={appear}
          />
          <LinkButton
            link="/gallery"
            classNames="gallery"
            position="gallery_position"
            appear={appear}
          />
          <LinkButton
            link="/lore"
            classNames="lore"
            position="lore_position"
            appear={appear}
          />
          <LinkButton
            link="/ranks"
            classNames="ranks"
            position="ranks_position"
            appear={appear}
          />
          <Footer title="The world of Ethereum" />
          <Water
            onClick={() => {
              showButtonsTimeoutFn();
            }}
          />
          <Background />
        </>
      )}
    </React.Fragment>
  );
};

export default HomePageDesktop;
