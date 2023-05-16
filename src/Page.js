import Image from './Image'
import Language from './Language';

const Page = () => {
  const imageUrl = new URL(
    'images/emre.jpg?as=webp&width=200',
    import.meta.url
  );

  return( 
    <div className="page">
      <div className="grid-container">
        <div className="box picture">
          <Image imageUrl={imageUrl} alt="Emre Neumann"/>
          <h1>Emre Neumann</h1>
          <h4>Frontend Developer</h4>
        </div>
        <div className="box facts-and-skills">

          <h3>Languages</h3>
          <Language name="German" fluency={5} comments={["Read", "Write", "Complex Texts", "Technical Jargon", "Native Language"]}/>
          <Language name="English" fluency={4} comments={["Read", "Write", "Complex Texts", "Technical Jargon"]}/>
          <Language name="Turkish" fluency={3} comments={["Native Language", "Read"]}/>
          <Language name="Italian" fluency={2} comments={["Read and write"]}/>
        </div>
        <div className="box education">
          <h3>Education</h3>
        </div>
        <div className="box jobs">
          <h3>Jobs</h3>
        </div>
        <div className="box projects">
          <h3>Projects</h3>
        </div>
      </div>
    </div>
  )
}

export default Page