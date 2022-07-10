import { useEffect } from 'react'
import CharacterCard from '../../Components/homeCharacterCard'
import { fetchCharacters } from '../../Redux/characterSlice'
import { useAppDispatch, useAppSelector } from '../../Redux/store'
import Masonry from '@mui/lab/Masonry'




const Home = () => {
    const _characters = useAppSelector(state => state.characters)
    const disPatch = useAppDispatch()
    
    useEffect(() => {
        if (_characters.information.length === 0)
            disPatch(fetchCharacters(_characters.offset))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [disPatch])

    return (
        <div>
            <div className='text-center mb-10 mt-2'>
                <span className='drop-shadow-md italic text-white text-6xl homeTitleTextShadow'>Characters</span>
            </div>
            <div className='ml-5'>
                <Masonry columns={{ md: 4 }} spacing={{ md: 2 }} >
                    {
                        _characters.information.map((character) => <CharacterCard key={character.char_id} characterInfo={character} />)
                    }
                </Masonry>
            </div>
            <div className='text-center text-white my-5' style={{ display: `${_characters.limit && 'none'}` }}>
                <button onClick={() => disPatch(fetchCharacters(_characters.offset))}
                    className='border border-white rounded-full px-2 shadow-sm shadow-white'>
                    Load More
                </button>
            </div>
        </div>
    )
}

export default Home