import styles from './../../styles/form.module.css'
import { useState } from 'react';
import axios from 'axios';
export default function Form(){
    const [addNiver, setAddNiver] = useState({})

    const addJson = (event) => {
        setAddNiver({...addNiver, [event.target.name]: event.target.value})
        console.log(addNiver)
    }

    const senData = async () => {
        const send = await axios.post('http://localhost:3001/addAniversariante', addNiver);
    }

    const options = () => {
        return(
            <>
            <option>adadad</option>
            </>
        )
    }

    return(
        <>
        <div className = {styles.divPai}>
            <form className = {styles.form} method='post'>
                <h2>Adiconar aniversariante</h2>
                <input onChange={addJson} type = 'text' name = 'name' placeholder = 'Nome do aniversariante'/>
                <input onChange={addJson} type = 'text' name = 'day' placeholder = 'Dia do aniversario'/>
                <input onChange={addJson} type = 'text' maxLength={2} name = 'month' placeholder= 'Mês de aniversario'/>
                <input onClick={senData} type = 'submit' value = 'Criar aniversariante'/>
            </form>
        </div>
        </>
    )
}