import { useContext } from 'react';
import Image from './Image'
import LanguageContext from './LanguageContext';
import LanguageList from './LanguageList';
import LanguageSwitch from './LanguageSwitch';
import Timeline from './Timeline';

const Page = ({content}) => {
  const [selectedLanguage, ] = useContext(LanguageContext)
  const imageUrl = new URL(
    'images/emre.jpg?as=webp&width=200',
    import.meta.url
  );
  const languageData = content[selectedLanguage.code].find(section => section.type === "Languagelist")
  const timelineData = content[selectedLanguage.code].find(section => section.type === "Timeline")

  return( 
    <div className="page">
      <div className="buttons">
        <LanguageSwitch />
      </div>
      <div className="grid-container">
        <div className="box picture">
          <Image imageUrl={imageUrl} alt="Emre Neumann"/>
          <h1>Emre Neumann</h1>
          <h2>Frontend Developer</h2>
        </div>
        <div className="box facts-and-skills">
          <h3>{languageData.title}</h3>
          <LanguageList list={languageData.content}/>
        </div>
        <div className="box timeline">
          <h3>{timelineData.title}</h3>
          <Timeline entries={timelineData.content} />
        </div>
        <div className="box projects">
          <h3>Projects</h3>
        </div>
      </div>
    </div>
  )
}

export default Page