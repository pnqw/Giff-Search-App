import { useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import Dropdown from './Dropdown';
import Link from "next/link"
interface Props {
  gif: any;
}

const Card: React.FC<Props> = ({ gif }) => {
  const [isLiked, setIsLiked] = useState<boolean>(false)
  const like = ()=> (isLiked) ? setIsLiked(false) : setIsLiked(true)

  return (
    <div className="card">
      <Link href={`/${gif.id}`}>
        <a>
          <img
            width="100%"
            src={gif.images.fixed_height.url} 
            alt={gif.title} 
          />
        </a>
      </Link>
      <div className='flex justify-between gap-2 items-center mx-4'>
        <button onClick={like}>
          <FaHeart className={` ${isLiked ? "text-red-500" : "text-gray-300"}`}  size={20} />
        </button>
        <p className="text-xs text-center my-2 text-gray-300">{gif.title}</p>
        <Dropdown gifUrl={gif.url} />
      </div>
    </div>
  )
}

export default Card