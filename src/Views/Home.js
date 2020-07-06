import React,{useContext} from 'react';
import '../App.css';
import { Link } from 'react-router-dom'
import { AppContext } from '../AppContext'
import Card from '../Components/Card'


function Home() {
    const [people,setPeople] = useContext(AppContext);
    const List = people.map((p)=>{
        return(
            <Card name={p.name} amount={p.amount} color = {p.amount<0?"Red":"Green"}></Card>
        )
    })

    return (
        <div className="Home">
            {List}
            <Link to="/split">
                <div class="fab"> + </div>
            </Link>
        </div>
    );
}

export default Home;
