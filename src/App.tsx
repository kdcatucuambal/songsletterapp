import { Fragment, useEffect, useState } from "react";
import { getArtistFormApi, getLetterFormApi } from "./api.reactservice";
import Form from "./components/Form";
import Song from "./components/Song";
import Info from "./components/Info";
import { SearchSong } from "./song.model";
import { validateSong } from "./song.util";

function App() {
  //define state
  const [searchMain, setSearchMain] = useState<SearchSong>({
    artist: "",
    song: "",
  });
  const [letter, setLetter] = useState<string>("");
  const [artist, setArtist] = useState<[]>([]);

  useEffect(() => {
    if (!validateSong(searchMain)) return;

    const getLetter = async () => {
      const [songLetter, artistInfo] = await Promise.all([
        getLetterFormApi(searchMain),
        getArtistFormApi(searchMain),
      ]);
      setLetter(songLetter.lyrics);
      setArtist(artistInfo.artists);
    };

    getLetter();
  }, [searchMain]);

  return (
    <Fragment>
      <Form setSearchMain={setSearchMain}></Form>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <Info info={artist} />
          </div>
          <div className="col-md-6">
            {letter.length === 0 ? null : <Song letter={letter} />}
            
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
