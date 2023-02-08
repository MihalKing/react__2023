import React from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {CarValidator} from "../../validators/carValidator";
import {carService} from "../../services";
import {useEffect} from "react";

const CarForm = ({setCars,updateCar}) => {

    const {register, handleSubmit, reset, formState: {errors, isValid}, setValue} = useForm({
        mode: 'all',
        resolver: joiResolver(CarValidator)
    });

    useEffect(()=>{
        if (updateCar) {
            setValue('brand',updateCar.brand)
            setValue('price',updateCar.price)
            setValue('year',updateCar.year)
        }
    },[updateCar])

 const create = async (car) =>{

         const {data} = await carService.create(car);
         setCars(prev => [...prev, data]);
         reset();
 };

    const update = async (car) =>{

         const {data} = await carService.updateById(updateCar.id,car);
        if (Object.keys(data).length) {
            const {data} = await carService.getAll()
            setCars(data)
        }
 };

    return (
        <div>
            <form onSubmit={handleSubmit(updateCar ? update : create)}>
                <div>
                    <input type={"text"} placeholder={'brand'} {...register('brand')}/>
                    {errors.brand && <span>{errors.brand.message}</span>}
                </div>
                <div>
                    <input type={"text"} placeholder={'price'} {...register('price')}/>
                    {errors.price && <span>{errors.price.message}</span>}
                </div>
                <div>
                    <input type={"text"} placeholder={'year'} {...register('year')}/>
                    {errors.year && <span>{errors.year.message}</span>}
                </div>
                <button disabled={!isValid}   >{updateCar?'Update':'Create'}</button>
            </form>
        </div>
    );
};

export {CarForm};