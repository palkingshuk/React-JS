export default function Button({colour,text,state})
{
    return(
        <button
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: colour}} onClick={() => state(colour)}
        >{text}</button>
    )
}