export function ProgressBar(props) {
  return (
    <>
      <div
        className="leading-5 font-semibold overflow-hidden
                  rounded-full bg-blue-100 text-blue-800 
                  w-full text-center relative block text-xs h-5"
      >
        <div
          className=" 
              shadow-none h-full
                    rounded-full bg-blue-400 
                    absolute block bg-opacity-25"
          style={{ width: props.percentage + '%' }}
        >
          &nbsp;
        </div>
        { props.percentage + " %" }
      </div>      
    </>
  );
}