import React from 'react';
import {useForm} from "react-hook-form";

const CarForm = () => {
    const {register,handleSubmit,reset,formState:{errors,isValid},setValue} = useForm({mode:'all'});

    const submit = (data) => {
console.log(data)
    }

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <input type={"text"} placeholder={'brand'} {...register('brand', {
                    pattern: {
                        value: /^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/,
                        message: 'Only letters till 1 to 20 '
                    }
                })}/>
                {errors.brand && <span>{errors.brand.message}</span>}

                <input type={"text"} placeholder={'price'} {...register('price', {
                    valueAsNumber: true,
                    min: {value: 0, message: 'minimum 0'},
                    max: {value: 1000000, message: 'maximum 1000000'}
                })}/>
                {errors.price && <span>{errors.price.message}</span>}

                <input type={"text"} placeholder={'year'} {...register('year', {
                    valueAsNumber: true,
                    min: {value: 1990, message: 'minimum 1990'},
                    max: {value: new Date().getFullYear(), message: `maximum ${new Date().getFullYear()}`}
                })}/>
                {errors.year && <span>{errors.year.message}</span>}
                <button>Create</button>
            </form>
        </div>
    );
};

export {CarForm};