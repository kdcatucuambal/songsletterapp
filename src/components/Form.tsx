import React, { useState } from "react";
import { SearchSong } from "../song.model";
import { validateSong } from "../song.util";



interface Props {
  setSearchMain(search: SearchSong): void;
}

const Form = ({ setSearchMain }: Props) => {
  const [search, setSearch] = useState<SearchSong>({ artist: "", song: "" });
  const [error, setError] = useState(false);
  const handleState = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch({ ...search, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateSong(search)) {
      setError(true);
      return;
    }
    setError(false);

    //Component main
    setSearchMain(search);
  };

  return (
    <div className="bg-info">
      {error ? (
        <p className="alert alert-danger text-center p-2">
          All fields are required
        </p>
      ) : null}
      <div className="container">
        <div className="row">
          <form
            onSubmit={handleSubmit}
            className="col card text-white bg-transparent mb-5 pt-5 pb-2"
          >
            <fieldset>
              <legend className="text-center">Find song letter: </legend>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="artist">Artist</label>
                    <input
                      type="text"
                      className="form-control"
                      name="artist"
                      placeholder="Put the artist"
                      onChange={handleState}
                      value={search.artist}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="song">Artist</label>
                    <input
                      type="text"
                      className="form-control"
                      name="song"
                      placeholder="Put the song"
                      onChange={handleState}
                      value={search.song}
                    />
                  </div>
                </div>
              </div>
              <button type="submit" className="btn btn-primary float-right">
                Search
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
