import React, { useContext, useState } from 'react';
import { GiphyFetch } from '@giphy/js-fetch-api';
import { EmojiVariationsList, Grid, SearchBar, SearchContext, SearchContextManager, SuggestionBar } from '@giphy/react-components';
// import type { GifID, IGif } from '@giphy/js-types';
import GiphySearch from './GiphySearch';

// use @giphy/js-fetch-api to fetch gifs
// apply for a new Web SDK key. Use a separate key for every platform (Android, iOS, Web)
const gf = new GiphyFetch('qj2g2GjlKwC6GsLbiXULyO8zL1mrbUOt');
const fetchDefaultVariations = (offset: number) => gf.emojiDefaultVariations({ offset });
const fetchVariations = (id: GifID) => gf.emojiVariations(id);
interface IProps {
    setGif: Function;
}
export function Giphy({ setGif }: IProps) {
    const { fetchGifs, searchKey } = useContext(SearchContext);
    return (
        <>
            <GiphySearch />
            {/* <SuggestionBar /> */}

            <Grid
                key={searchKey}
                columns={7}
                fetchGifs={fetchGifs}
                hideAttribution={true}
                noLink={true}
                onGifClick={(_gif: IGif) => setGif(_gif)}
                width={250}
                gutter={4}
            />
        </>
    );
}
