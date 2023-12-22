import './App.css';
import AllData from './component/AllData';
import FewData from './component/FewData';

const name = 'Hiral';
const arr=[1,2,3,4,5];
const obj={
    name:'Hiral',
    age:19
}
const user=[
  {no:1,name:"John",age:20,email:"user1@gmail.com"},
  {no:2,name:"Rohan",age:18,email:"user2@yahoo.com"},
  {no:3,name:"Heer",age:19,email:"user3@yahoo.com"},
  {no:4,name:"Hiral",age:17,email:"user4@yahoo.com"},
]


function App() {
  return (
    <>
      <h1>{name}</h1>
      <h1>{arr}</h1>
      <ul>
        {
          arr.map((item)=>{
            return <li>{item}</li>
          })
        }
      </ul>
      <h2>{obj.name} --- {obj.age}</h2>


{/* this method is use to print or call "ALL" the objects store in the user array */}
      <table cellPadding={10} border={1} cellSpacing={2}>
        <tr>
          <th>No</th>
          <th>Name</th>
          <th>Age</th>
          <th>Email</th>
        </tr>
        {
          user.map((data)=>{
            return (
              <tr>
                <td>{data.no}</td>
                <td>{data.name}</td>
                <td>{data.age}</td>
                <td>{data.email}</td>
              </tr>
            )
          })
        }
      </table>

      <AllData jotuChe={user} />

      <h1>Selected Data</h1>
      <table cellPadding={10} border={1} cellSpacing={2}>
            <tr>
                <th>No</th>
                <th>Age</th>
                <th>Email</th>
            </tr>
            {
              user.map((sub)=>{
                return <FewData fewDataNo={sub.no} fewDataAge={sub.age} fewDataEmail={sub.email}/>
              })
            }
        </table>

    </>
  );
}

export default App;
