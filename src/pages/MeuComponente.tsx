interface MessageProps{ 
    message: string;
}

const Message: React.FC<MessageProps> = (props: MessageProps) => {
    return(
        <div>
            {props.message}
        </div>
    )
}

const MeuComponente = () => {
    return (
        <div>
            <Message message="outro teste!"/>
        </div>
    )
}

export default MeuComponente