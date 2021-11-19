export function ButtonDelete(props) {
  return (
    <button
        type="button"
        className="
            inline-flex items-center px-1 rounded-full
            text-xs leading-4 font-medium  
            text-pink-700 bg-transparent hover:text-pink-500 
            focus:outline-none focus:border-pink-300 focus:shadow-outline-red 
            active:text-red-800 active:bg-red-50 
            transition ease-in-out duration-150"
    >
        <svg
            className="-ml-0.5 h-4 w-4"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke-linecap="round"
            stroke-linejoin="round"
        >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />            
        </svg>
        { 
            (props.caption && props.caption.length>0) &&
            <span class="ml-1 mr-1 ">{ props.caption }</span>
        }        
        
    </button>      
  )
}

