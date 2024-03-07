import styles from './../../styles/form.module.css'
export default function Form(){
    return(
        <>
        <div className = {styles.divPai}>
            <form className = {styles.form}>
                <input type = 'text' name = 'name' placeholder = 'Nome do aniversariante'/>
                <input type = 'text' name = 'day' placeholder= 'Dia do aniversario'/>
                <input type = 'text' name = 'month' placeholder= 'Mês do aniversario'/>
                <input type = 'submit' value = 'Criar aniversariante'/>
            </form>
        </div>
        </>
    )
}