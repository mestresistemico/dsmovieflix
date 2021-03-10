import React from 'react';
import history from 'core/utils/history';
import { makePrivateRequest } from 'core/utils/request';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import './styles.scss';

export type FormState = {
    text: string;
}

type Props = {
    movieId?: number;
}

const ReviewInsert = ({
    movieId
}: Props) => {
    const { register, handleSubmit, errors, setError } = useForm<FormState>();

    const notBlankText = (text: string) => {
        return text.replace(/\s/g, '') !== '';
    }

    const onSubmit = (data: FormState) => {
        if (notBlankText(data.text)) {
            const payload = {
                ...data,
                movieId
            }

            makePrivateRequest({
                url: '/reviews',
                method: 'POST',
                data: payload
            })
                .then(() => {
                    toast.info('Avaliação salva com sucesso!');
//                    history.push(`/movies/${movieId}`);
                    history.go(0);
                })
                .catch(() => {
                    toast.error('Erro ao salvar avaliação!');
                });
        } else {
            setError("text", {
                type: "manual",
                message: "Seu texto de avaliação não pode estar em branco!"
              });
        }

    }

    return (
        <form className='card-base review-container' onSubmit={handleSubmit(onSubmit)}>
            <textarea
                className='form-control review-text'
                name="text"
                ref={register({ 
                    required: "Campo obrigatório" 
                })}
                placeholder="Deixe sua avaliação aqui"
                rows={3} />
            {errors.text && (
                <div className='invalid-feedback d-block'>
                    {errors.text.message}
                </div>
            )}
            <div className="button-save-container">
                <button
                    className='btn btn-outline-dark button-save-review'>
                    SALVAR AVALIAÇÃO
            </button>
            </div>
        </form>
    )
}

export default ReviewInsert;