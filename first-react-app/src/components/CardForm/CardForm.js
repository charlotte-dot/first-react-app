import styles from './CardForm.module.scss';
import { useEffect, useState } from 'react';
import Button from './../Button/Button';
import TextInput from './../TextInput/TextInput';
import { useDispatch } from 'react-redux';

const CardForm = props => {

    const [title, setTitle] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        console.log('Test');
    }, [])

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addColumn({title:title, columnId: props.columnId } ));
        setTitle('');
    };

	return (
        <form className={styles.cardForm} onSubmit={handleSubmit}>
            <TextInput value={title} onChange={e => setTitle(e.target.value)} />
            <Button>Add card</Button>
        </form>
	);
};

export default CardForm;