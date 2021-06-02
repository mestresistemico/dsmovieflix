import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, ActivityIndicator } from 'react-native';
import { getGenres } from '../services';
import { theme, pickerSelectStyles, colors } from '../styles';
import RNPickerSelect from 'react-native-picker-select';

interface SearchProps {
    genre?: Genre;
    handleChangeGenre: (Genre: Genre) => void;
}

type Genre = {
    id: number;
    name: string;
    label: string;
    value: number;
}

const SearchInput: React.FC<SearchProps> = ({
    genre,
    handleChangeGenre,
}) => {
    const [genres, setGenres] = useState<Genre[]>([]);
    const txtPlaceholder = {
        label: 'Escolha um gênero...',
        value: null,
        color: colors.mediumGray,
    };

    const mapSelectGenres = (genres: Genre[]) => {
        return genres.map(genre => ({
            ...genre,
            label: genre.name,
            value: genre.id,
            key: genre.id
        }));
    }

    async function fillGenres() {
        const res = await getGenres();
        const selectedGenres = mapSelectGenres(res.data);
        setGenres(selectedGenres);
    };

    useEffect(() => {
        fillGenres();
    }, []);

    return (
        <View style={theme.inputContainer}>
            <View style={theme.selectContainer}>
                <RNPickerSelect
                    placeholder={txtPlaceholder}
                    items={genres}
                    value={genre}
                    onValueChange={(e) => {
                        genre = e;
                        handleChangeGenre(e);
                    }}
                    style={pickerSelectStyles}
                />
            </View>
        </View>
    )

}

export default SearchInput;