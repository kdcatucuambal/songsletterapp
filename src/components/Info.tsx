import React from "react";

interface Props {
  info: any[];
}

const Info = ({ info }: Props) => {
  const isThereArtist = info.length === 0;

  if (isThereArtist) return null;

  const artist = info[0];

  return (
    <div className="card border-light">
      <div className="card-header bg-primary text-light font-weight-bold">
        Artist Information
      </div>

      <div className="card-body">
        <img src={artist.strArtistThumb} alt="Artist logo" />
        <p className="card-text">Gender: {artist.strGenre}</p>
        <h2 className="card-text">Biography:</h2>
        <p className="card-text text-justify">{artist.strBiographyES}</p>
        <p className="card-text">
          <a
            href={`https://${artist.strFacebook}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook"></i>
          </a>
          <a
            href={`https://${artist.strTwitter}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href={`${artist.strLastFMChart}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-lastfm"></i>
          </a>
        </p>
      </div>
    </div>
  );
};

export default Info;
