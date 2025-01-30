
import GlobalStyles from './styles/GlobalStyles';

// lessons
// import Lesson06 from './lessons/Lesson06/Lesson06'
// import Lesson07 from './lessons/Lesson07/Lesson07';
// import Lesson08 from './lessons/Lesson08/Lesson08';
// import Lesson09 from './lessons/Lesson09/Lesson09';
//import Lesson10 from './lessons/Lesson10/Lesson10';

// homeworks
import Homework10 from './homeworks/Homework10/Homework10';
// consultations
// import Consultation03 from './consultations/Consultation03/Consultation03'


function App() {
  return (
   <>
      <GlobalStyles/>
   {/* Topic: TypeScript-Introduction */}
    {/* <Lesson06/>*/}
     {/* <Consultation03/> */}
    {/* Topic: TypeScript-Object types, enum */}
    {/*<Lesson07/>*/}
    {/* Topic: Styling components */}
    {/*<Lesson08/>*/}
      {/* Topic: Control components, useEffect */}
      {/*<Lesson09 />*/}
      {/*<Lesson10 />*/}
      <Homework10 />
    </>
  )
}

export default App;
