import React from 'react';
import ProjectCard from '../components/ProjectCard'

 function Home() {
   return (
     <div>
      <h1>This is home</h1>
      <ProjectCard desc="This is a description" name="Project1"/>
      <ProjectCard desc="This is a description" name="Project2"/>
      <ProjectCard desc="This is a description" name="Project3"/>
      <ProjectCard desc="This is a description" name="Project4"/>
      </div>
   );
 }

 export default Home;
