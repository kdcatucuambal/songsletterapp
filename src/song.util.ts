import { SearchSong } from "./song.model";

export const validateSong = (search: SearchSong) => {
  if (search.song.trim() === "" || search.artist.trim() === "") {
    return false;
  }
  return true;
};
