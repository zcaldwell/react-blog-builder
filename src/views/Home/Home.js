import { useState } from 'react';

import Preview from '../../components/Preview/Preview';
import Editor from '../../components/Editor/Editor';

import './Home.css';

export default function Home() {
  // add useState calls here for title, subtitle, font, align, and text
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');

  return (
    <main>
      {/* pass the state variables as props to the presentational components */}
      <Preview {...{ setTitle, title, setSubtitle, subtitle }} />
      <Editor {...{ setTitle, title, setSubtitle, subtitle }} />
    </main>
  );
}
