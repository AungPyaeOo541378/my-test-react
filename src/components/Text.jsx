export default function Text ({title,description,textColor,titleColor}){
    return(
        <div className="border boder-blue rounded-lg p-5 m-3 bg-gray-400">
            <h5 className={`${titleColor} text-5xl m-10`}>{title}</h5>
            <p className={`${textColor } text-3xl`}>{description}</p>
        </div>
    )
}