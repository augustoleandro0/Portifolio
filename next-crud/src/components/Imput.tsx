interface ImputProps {
   text: string;
   type?: 'text' | 'number'; 
   value: any;
   className?: string;
   onlyReading?: boolean;
   onChange?: (value: any) => void;
}

export default function Imput (props: ImputProps) {
    return(
        <div className={`flex flex-col  ${props.className}`}>
             <label className="mb-4">
                 {props.text}
             </label>
             <input type={props.type ?? 'text'}  value={props.value} readOnly={props.onlyReading}  
             onChange={e => props.onChange?.(e.target.value )}
             className={`border border-purple-500 rounded-lg  focus:outline-none  bg-gray-300 px-4 py-2 
             ${props.onlyReading ? '' : 'focus:bg-white'}`}/>
        </div>
    )
}