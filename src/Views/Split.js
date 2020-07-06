import React, { useContext, useState } from 'react';
import '../App.css';
import { AppContext } from '../AppContext'
import Table from '../Components/Table'



function Split(props) {
  const [people, setPeople] = useContext(AppContext);
  const [total, setTotal] = useState()
  const [desc, setDesc] = useState()
  const [trans, setTrans] = useState([]);
  const [name, setName] = useState();
  const [spent, setSpent] = useState();
  const [owe, setOwe] = useState();
  const [error, setError] = useState();

  const updateTotal = (e) => {
    if (!isNaN(e.target.value)) {
      setTotal(e.target.value);
    }
    else {
      setTotal("")
    }
  }
  const updateDesc = (e) => {
    setDesc(e.target.value);
  }
  const updateName = (e) => {
    setName(e.target.value);
  }
  const updateSpent = (e) => {
    if (!isNaN(e.target.value)) {
      setSpent(e.target.value);
    }
    else {
      setSpent("")
    }
  }
  const updateOwe = (e) => {
    if (!isNaN(e.target.value)) {
      setOwe(e.target.value);
    }
    else {
      setOwe("")
    }
  }
  const updateTrans = (e) => {
    e.preventDefault();
    setTrans((pre) => [...pre, { name: name, spent: spent, owe: owe }])
  }

  const validate = () => {
    let sum = 0
    for (let i = 0; i < trans.length; i++) {
      sum += parseInt(trans[i].spent)
    }
    if (sum == total) {
      return true;
    }
    return false;
  }
  const updatePeople = (e) => {
    e.preventDefault();
    if (validate()) {
      var newPeople = trans.map((t) => {
        return ({
          name: t.name,
          amount: t.owe - t.spent
        })
      })
      setPeople((pre) => {
        let prePeople = pre.slice()
        for (var i = 0; i < newPeople.length; i++) {
          var found = false;
          for (var j = 0; j < prePeople.length; j++) {
            if (prePeople[j]['name'] === newPeople[i]['name']) {
              console.log(prePeople[i].name)
              prePeople[j]['amount'] += newPeople[i]['amount']
              found = true
            }
          }
          if (found === false) {
            prePeople.push(newPeople[i])
          }
        }
        return ([...prePeople])
      });
      props.history.push('/')
    }
    else {
      setError("Total does'nt Match")
    }
  }

  
  return (
    <div className="Split">

      <div>
        <p className="Error">{error}</p>
        <div className="">
          <div>Total: </div>
          <input value={total} onChange={updateTotal}></input>
        </div>
        <div className="">
          <div>Description: </div>
          <input value={desc} onChange={updateDesc}></input>
        </div>
        <button className="button" onClick={updatePeople}>Submit</button>
      </div>

      <div className="Spent-List">
        <Table trans={trans} ></Table>
        <div className="addPeople">
          <input className="input" placeholder="Name" value={name} onChange={updateName} ></input>
          <input className="input" placeholder="Spent" size="4" value={spent} onChange={updateSpent} ></input>
          <input className="input" placeholder="Owe" size="4" value={owe} onChange={updateOwe} ></input>
          <button className="input button" onClick={updateTrans}>add</button>
        </div>
      </div>
    </div>
  );
}

export default Split;
