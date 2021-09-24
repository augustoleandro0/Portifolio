interface ButomProps {
    children: any
    className?: string
    color?: 'green' | 'blue' | 'gray' 
    onClick?: () => void
}



export default function Button(props){ 
    return (
    <button onClick={props.onClick} className={`bg-gradient-to-r from-${props.color}-400 to-${props.color}-700 text-white px-4 py-2 rounded-md ${props.className}`}>

            {props.children}
       </button>
    )

} 