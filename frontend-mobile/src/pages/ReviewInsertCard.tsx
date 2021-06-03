import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { insertReview } from '../services';
import { theme, text } from '../styles';
import Toast from 'react-native-tiny-toast';
import { useNavigation } from '@react-navigation/core';

interface ReviewInsertProps {
    movieId: number;
}

const ReviewInsertCard: React.FC<ReviewInsertProps> = ({ movieId }) => {
    const navigation = useNavigation();
    const [textReview, setTextReview] = useState("");

    const notBlankText = (text: string) => {
        return text.replace(/\s/g, '') !== '';
    }

    async function handleInsertReview() {
        if (notBlankText(textReview)) {
            await insertReview(movieId, textReview)
                .then(result => {
                    setTextReview("");
                    Toast.showSuccess("Avaliação inserida com sucesso");
                }).catch(err => {
                    Toast.show("Erro ao inserir avaliação. Revise use texto ou informe ao administrador o erro: " + err);
                });
        } else {
            Toast.show("A avaliação não pode estar em branco.");
        }
    }

    return (
        <View style={theme.reviewCard}>
            <TextInput
                multiline
                placeholder="Deixe sua avaliação aqui"
                value={textReview}
                onChangeText={(e) => setTextReview(e)}
                style={theme.textAreaReview} />
            <View style={theme.reviewButtonContainer}>
                <TouchableOpacity style={theme.primaryButton} onPress={() =>
                    handleInsertReview()}>
                    <Text style={text.primaryText}>Salvar avaliação</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

};

export default ReviewInsertCard;