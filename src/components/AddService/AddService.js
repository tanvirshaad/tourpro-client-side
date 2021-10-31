import React from 'react';
import { useForm } from 'react-hook-form';

const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        fetch('https://macabre-warlock-05384.herokuapp.com/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                alert('New Service Inserted');
                reset();
            });
    };
    return (
        <div className="add-service">
            <h2>Please add a service</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    {...register('name', {
                        required: true,
                        maxLength: 20,
                    })}
                    placeholder="Name"
                />
                <textarea
                    {...register('description')}
                    placeholder="Description"
                />
                <input
                    {...register('duration', {
                        required: true,
                        maxLength: 20,
                    })}
                    placeholder="Duration"
                />
                <input
                    type="number"
                    {...register('price')}
                    placeholder="price"
                />
                <input {...register('img')} placeholder="image url" />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddService;
