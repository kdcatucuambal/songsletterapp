import React, { Fragment } from "react";

interface Props {
  letter: string;
}

const Song = ({ letter }: any) => {
  return (
    <Fragment>
      <h2>Song Letter</h2>
      <p className="letra">{letter}</p>
    </Fragment>
  );
};

export default Song;
