import './App.css';
import { useState } from 'react';
import Sidebar from './Components/Sidebar/Sidebar'
import ContentSection from './Components/ContentSection/ContentSection'

function App() {
  const [groups, setGroups] = useState([]);
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [notes, setNotes] = useState({});

  const addGroup = (group) => {
    setGroups([...groups, group]);
    setNotes({
      ...notes,
      [group.title]: []
    });
  };

  const addNote = (note) => {
    setNotes({
      ...notes,
      [selectedGroup]: [...notes[selectedGroup], note]
    });
  };
 
  return (
    <div className="App">
      <Sidebar 
        groups={groups} 
        addGroup={addGroup} 
        selectGroup={setSelectedGroup}
      />
     <ContentSection
      notes={selectedGroup ? notes[selectedGroup] : []} 
        addNote={addNote}
        selectedGroup={selectedGroup}
     />
    </div>
  );
}

export default App;
