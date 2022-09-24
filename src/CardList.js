import Card from './Card';
import styles from './CardList.module.css';

const CardList = ({robots}) => {
const cardsArray = robots.map((user, i) => {
  return <Card key={i} id={robots[i].id} name={robots[i].name} email={robots[i].email}/>
})

  return (
    <div className={styles.container}>
      {cardsArray}
    </div>
  )
}

export default CardList
