import CountyList from '../CountySelect';
import CountySelectList from '../CountySelectList';
import { Outlet } from 'react-router-dom';

const Segments = () => {
    return (
        <div className='Segments'>
            <CountyList />
            <CountySelectList />

            <Outlet />
        </div>
    );
}

export default Segments;

/*
async function asyncFunc2() {
  console.log("in Async function 2");

   return new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('foo');
  }, 5000);
});
}
async function asyncFunc1() {
  console.log("in Async function 1");
  const test = await asyncFunc2();
    console.log(test);
  console.log('After an await');
}
console.log("starting sync code");
asyncFunc1().then(() => {
  console.log("Received answer from async code");
});
console.log("finishing main thread");
VM574:16 starting sync code
VM574:11 in Async function 1
VM574:2 in Async function 2
VM574:20 finishing main thread
undefined
VM574:13 foo
VM574:14 After an await
VM574:18 Received answer from async code


*/