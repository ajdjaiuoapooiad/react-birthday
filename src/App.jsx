import { useState } from "react";
import data from "./data";
import List from "./List";

const App = () => {

  const [ people,setPeople ] = useState(data)
  console.log(people);
  
  return (
    <main>
      <section>
        <h3>{people.length} birthday today</h3>
        <List people={people} />
      </section>
    </main>
  )
};
export default App;
