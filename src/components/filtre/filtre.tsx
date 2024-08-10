import React, { useRef } from 'react';
import { useAppDispatch } from '../../hooks/index';
import { nameRepo } from '../../services/slices/searchSlice';
import { searchSliceThunk } from "../../services/thunks/searchSliceThunk";
import styles from './filtre.module.css';

const Filtre: React.FC = () => {
    const dispatch = useAppDispatch();
    const inputRef = useRef<HTMLInputElement>(null);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const query = inputRef.current?.value;
        if (query) {
            dispatch(searchSliceThunk(query));
            inputRef.current.value = "";
            dispatch(nameRepo(null));
        }
    };

    return (
        <form className={styles.container} onSubmit={handleSubmit}>
            <div>
                <input 
                    ref={inputRef} 
                    placeholder='Введите поисковый запрос' 
                    className={styles.input} 
                />
            </div>
            <div>
                <button className={styles.button} type="submit">Искать</button>
            </div>
        </form>
    );
}

export default Filtre;
