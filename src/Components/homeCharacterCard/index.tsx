import { useState } from "react"
import { Link } from "react-router-dom"
import { ICharacter } from "../../Interface/character"
import Detail from "./detail"

const _detailHidden = 'overflow-hidden h-7'

const CharacterCard = ({ characterInfo }: { characterInfo: ICharacter }) => {
    const [showDetail, setShowDetail] = useState<boolean>(true)

    return (
        <nav>
            <div className='p-2 mx-2 mb-5  shadow-red-300 shadow-sm text-gray-50 text-center '>
                <Link to={`${characterInfo.name}`}>
                    <div className=''><img className='mx-auto mb-2' src={characterInfo.img} alt="" /></div>
                </Link>
                <div className={`text-xs h-3 animate-bounce`}>
                    <span onClick={() => setShowDetail(!showDetail)}>
                        {!showDetail ? '˄' : '˅'}
                    </span>
                </div>
                <div className={`${showDetail && _detailHidden }`}>
                    <div>
                        <span className='text-lg font-semibold'>{characterInfo.name}</span>
                        <span className='mx-1'>/</span>
                        <span className='text-xs'>{characterInfo.nickname}</span>
                    </div>
                    <Detail characterInfo={characterInfo} />
                </div>
            </div>
        </nav>
    )
}

export default CharacterCard