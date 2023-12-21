import React, { useCallback, useEffect, useState } from "react";
import LinkButton from "../../LinkButton";
import Background from "../../Background";

const HomePageDesktop = () => {
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

  return (
    <React.Fragment>
      <LinkButton link="/about_us" classNames="about" appear={appear} />
      <LinkButton link="/contacts" classNames="contacts" appear={appear} />
      <LinkButton link="/gallery" classNames="gallery" appear={appear} />
      <LinkButton link="/lore" classNames="lore" appear={appear} />
      <LinkButton link="/ranks" classNames="ranks" appear={appear} />
      <LinkButton link="/team" classNames="team" appear={appear} />
      <Background onClick={showButtonsTimeoutFn} />
    </React.Fragment>
  );
};

export default HomePageDesktop;
