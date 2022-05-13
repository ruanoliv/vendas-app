
interface InputProps{
    onChange?: (value: any) => void;
    label: string;
    placeholder: string;
    columnClasses?: string;
    id: string;
    value: string;
}

export const Input: React.FC<InputProps> = ({onChange, label, placeholder, columnClasses, id, value}: InputProps) => {
    return(
        <div className={`field column ${columnClasses}`}>
                    <label className="label" htmlFor={id}>{label}</label>
                    <div className="control">
                        <input
                            id={id} value={value} onChange={ event => {
                                if(onChange){
                                    onChange(event.target.value);
                                }
                            }}
                            className="input" type="text" placeholder={placeholder} />
                    </div>
                </div>
    )
}