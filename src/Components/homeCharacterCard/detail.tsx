import { ICharacter } from "../../Interface/character"


interface IProps {
    characterInfo: ICharacter,
}


const Detail = ({ characterInfo }: IProps) => {
    return (
        <div className='text-sm'>
            <div className='grid grid-cols-2 my-1'>
                <div className='text-right mx-1'>Portrayed:</div>
                <div className='text-left'>{characterInfo.portrayed}</div>
            </div>
            <div className='grid grid-cols-2 my-1'>
                <div className='text-right mx-1'>Birthday:</div>
                <div className='text-left'>{characterInfo.birthday}</div>
            </div>
            <div className='grid grid-cols-2 my-1'>
                <div className='text-right mx-1'>Status:</div>
                <div className='text-left'>{characterInfo.status}</div>
            </div>
            <div className='grid grid-cols-2 my-1'>
                <div className='text-right mx-1 self-center'>Occupation:</div>
                <div className='text-left'>{characterInfo.occupation.map((occ, index) => {
                    return (
                        <div key={occ + index + 1}>
                            {occ}
                        </div>
                    )
                })}</div>
            </div>
        </div>
    )
}

export default Detail