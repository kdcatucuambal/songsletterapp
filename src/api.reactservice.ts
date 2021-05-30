import axios from "axios";
import { SearchSong } from "./song.model";

const letterURL = "https://api.lyrics.ovh/v1/";
const artistURL = "https://theaudiodb.com/api/v1/json/1/search.php?s=";

export const getLetterFormApi = async (search: SearchSong) => {
  const url = `${letterURL}${search.artist}/${search.song}`;
  const result = await axios(url);
  return result.data;
};

export const getArtistFormApi = async ({ artist }: SearchSong) => {
  const url = `${artistURL}${artist}`;
  const result = await axios(url);
  return result.data;
};
