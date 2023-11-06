// import '../../tailwindcss.css'
import './index.css'
const SpacingPadding = () => {
  return <div className="px-8"></div>;
};

const SpaceBetween = ()=>{
  return <div className="box flex px-8 space-x-4">

    <div className=''>01</div>
    <div className=''>02</div>
    <div className=''>03</div>
  </div>
}

const Spacing = () => {
  return (
    <>
      <SpacingPadding></SpacingPadding>
      <SpaceBetween></SpaceBetween>
    </>
  );
};
export default Spacing;
