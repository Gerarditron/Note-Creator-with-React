import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Note from './components/Note';
import FormArea from './components/FormArea';
import { useState } from 'react';

function App() {
const [notes, setNotes] = useState([]);

function addNote(note){ //Agregamos la nota predefinida, al frente del resto de notas
  setNotes(preNotes => {
    return [...preNotes, note]
  })
}

function delNote(id){ //Seleccionamos el index de la nota actual y lo ponemos en "id"
  setNotes(preNotes =>{
    return preNotes.filter((note, index) =>{
      return index !== id;
    })
  })
}

  return ( //Imprimimos el Encabezado, el pie de Pagina y el Formulario, dentro mapeamos todas las notas a cada tarjeta de notas
    <div className="App">
      <Header/>
      <FormArea addNote={addNote}/>
      {notes.map((note, index)=>(
        <Note
          id={index}
          delNote={delNote}
          title={note.title}
          content={note.content} />
      ))}
      <Footer/>
    </div>
  );
}

export default App;
