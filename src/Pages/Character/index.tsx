import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { ICharacter } from "../../Interface/character"
import { IDeath } from "../../Interface/death"
import { IDeathCount } from "../../Interface/deathCount"
import { IQuotes } from "../../Interface/quotes"


const Character = () => {

    const { characterName } = useParams()

    const [character, setCharacter] = useState<ICharacter>()
    const [quotes, setQuotes] = useState<Array<IQuotes>>()
    const [death, setDeath] = useState<IDeath>()
    const [deathCount, setDeathCount] = useState<IDeathCount>()

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_BASE_ENDPOINT}characters`, { params: { name: characterName } })
            .then((res) => setCharacter(res.data[0]))

        axios.get(`${process.env.REACT_APP_API_BASE_ENDPOINT}quote`, { params: { author: characterName } })
            .then((res) => res.data)
            .then((data) => data.length > 0 ? setQuotes(data) : null)

        axios.get(`${process.env.REACT_APP_API_BASE_ENDPOINT}death`, { params: { name: characterName } })
            .then((res) => res.data)
            .then((data) => data.length > 0 ? setDeath(data[0]) : null)

        axios.get(`${process.env.REACT_APP_API_BASE_ENDPOINT}death-count`, { params: { name: characterName } })
            .then((res) => setDeathCount(res.data[0]))
    }, [characterName])


    return (
        <div className='text-white text-center px-2'>
            <div className='text-4xl mb-5'>{character?.portrayed}</div>
            <div className='grid grid-cols-1 xl:grid-cols-3'>

                <div className='mx-auto col-span-1'><img src={character?.img} alt="" /></div>

                <div className='col-span-1'>
                    <div className='text-4xl mb-5 md:border-b border-white'>Character Information</div>
                    <div className='text-center'>

                        <div className='my-2'>
                            <span className='text-lg'>{character?.name}</span>
                            <span className='mx-1'>/</span>
                            <span className='text-sm'>{character?.nickname}</span>
                        </div>

                        <div className='my-2'>
                            <span className='text-lg'>{character?.birthday}</span>
                            <span className='mx-1'>-</span>
                            <span className='text-lg'>{!character?.status.includes('Alive') ? death?.season + 'x' + death?.episode : character?.status}</span>
                        </div>

                        <div className='my-2'>
                            <div className='text-xl'>Occupation</div>
                            <div>{character?.occupation.map((occ, index) => {
                                return (
                                    <div key={occ + index}>
                                        -{occ}
                                    </div>
                                )
                            })}</div>
                        </div>
                        <div className='my-2'>
                            <div className='text-xl'>Appeared Season</div>
                            <div>{character?.appearance.join(',')}</div>
                        </div>

                        {death &&
                            <div className='my-2'>
                                <div className='text-xl'>Last World</div>
                                <span className='mx-2'>{death.last_words}</span>
                            </div>
                        }
                        <div className='my-2 border-b md:border-none'>
                            <div className='text-xl'>Death Count</div>
                            <div>{deathCount?.deathCount}</div>
                        </div>

                    </div>
                </div>
                <div className='col-span-1'>
                    {quotes &&
                        <div>
                            <div className='text-4xl mb-5 md:border-b border-white'>Quotes</div>
                            <div>
                                {quotes?.map((quo, index) => {
                                    return (
                                        <div key={quo.quote_id + index} className='my-1'>
                                            -{quo.quote}
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    }
                </div>


            </div >
        </div >
    )
}

export default Character