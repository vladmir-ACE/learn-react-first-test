import { useState } from "react";
import Titre from "../../components/titre/titre";
import "./Home.css";
function Home() {

    // const [Liste,SetListe]=useState(["banane", "orange","mangue","avocat"]);
    // const [name,SetName]=useState('');

    // function UpdateFruit() {
    //   SetListe([...Liste,"citron"]);
      
    // };

    // const HandelSubmit=(event)=>{
    //   event.preventDefault();
    //   SetListe([...Liste,name]);

    // };

    const [Personne,SetPersonne]=useState([{nom:"kodjo",prenom:"komlan"}]);

    const [Man,SetMan]=useState({nom:"",prenom:""});

    const change=(e)=>{
      const nom=e.target.name;
      const value=e.target.value
       SetMan({...Man,[nom]:value});
           }


    const HandelSubmit=(e)=>{
      e.preventDefault();

      SetPersonne([...Personne,Man]);


    };

    return(
        <div> 

        <form onSubmit={HandelSubmit}>
          <label>Nom:
              <input type="text"
               name="nom"
               onChange={change}
              ></input>
          </label> <br/>
          <label>prenom:
              <input type="text"
              name="prenom"
              onChange={change}
              ></input>
          </label> <br/> <br/>

          <button type="submit">Ajouter</button>
        </form>


         <div className="d-flex justify-content-center align-items-center">
                
                <div className="TableDiv">
                        <table class="table">
                              <thead>
                                <tr>

                                  <th scope="col">Nom</th>
                                  <th scope="col">Prenom</th>
                                
                                </tr>
                              </thead>
                              <tbody>

                               {Personne.map((perso,index)=>(
                                     <tr key={index}>
                                        <td >{perso.nom}</td>
                                        <td >{perso.prenom}</td>
                                      </tr>

                               ))

                               }
                  

                              </tbody>
                         </table>
                </div>

         </div>






            {/* <h1>Hello</h1>
          <ul>
             {Liste.map((fruit,index)=>(
                <li key={index}>{fruit}</li>
             ))}
          </ul>

          <form onSubmit={HandelSubmit}>
            <label> fruit :
            <input type="text" value={name} onChange={(e)=>{SetName(e.target.value)}}/>
            </label>
            <button type="submit" >Ajouter</button>
          </form> */}


       
          
         </div>
    );
}
export default Home;  