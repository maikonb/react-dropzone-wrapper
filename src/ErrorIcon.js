export function ErrorIcon() {
  return (
    <span className=" flex items-center text-pink-700 mx-2">

      <svg 
        className="self-center h-4 w-4" 
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>          
    </span>    
  );
}