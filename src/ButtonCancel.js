export function ButtonCancel(props) {
  return (
    <button
        type="button"
        className="
            inline-flex items-center px-1 rounded-full
            text-xs leading-4 font-medium  
            text-red-700 bg-transparent hover:text-red-500 
            focus:outline-none focus:border-red-300 focus:shadow-outline-red 
            active:text-red-800 active:bg-red-50 
            transition ease-in-out duration-150"
        onClick={props.onClick}
    >
        <svg
            className="-ml-0.5 h-4 w-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="12" cy="12" r="10" />
            <line x1="15" y1="9" x2="9" y2="15" />
            <line x1="9" y1="9" x2="15" y2="15" />
        </svg>
        { 
            (props.caption && props.caption.length>0) &&
            <span class="ml-1 mr-1 ">{ props.caption }</span>
        }        
        
    </button>      
  )
}