import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import TinderCard from 'react-tinder-card'
import { fetchUnMatchedUsers, checkForMatch } from '../actions'
import { GrChat } from 'react-icons/gr'
import { CgProfile } from 'react-icons/cg'
import { Link } from 'react-router-dom'

function Swipe (props) {
  const { user, swipee, match } = props
  const [lastDirection, setLastDirection] = useState()
  const [checkingMatch, setCheckingMatch] = useState({})

  useEffect(() => {
    user.id && props.dispatch(fetchUnMatchedUsers(user))
  }, [user])

  // const childRefs = useMemo(() => Array(swipee.length).fill(0).map(i => React.createRef()), [])

  const swiped = (direction, card) => {
    if (direction === 'right' || direction === 'up') {
      const swipe = {
        userId: user.id,
        recieverId: card,
        isMatch: true
      }
      setCheckingMatch(swipe)
      setLastDirection('right')
      return props.dispatch(checkForMatch(swipe))
    } else {
      const swipe = {
        userId: user.id,
        recieverId: card,
        isMatch: false
      }
      setLastDirection('left')
      props.dispatch(checkForMatch(swipe))
      return null
    }
  }

  // const swipe = (direction) => {
  //   console.log(childRefs)
  //   const memesLeft = swipee.filter(item => !alreadyRemoved.includes(item.id))
  //   if (memesLeft.length) {
  //     const toBeRemoved = memesLeft[memesLeft.length - 1].id // Find the card object to be removed
  //     const index = swipee.map(meme => swipee.id).indexOf(toBeRemoved)
  //     console.log(toBeRemoved + 'hi')// Find the index of which to make the reference to
  //     alreadyRemoved.push(toBeRemoved) // Make sure the next card gets removed next time if this card do not have time to exit the screen
  //     childRefs[index].current.swipe(direction) // Swipe the card!
  //   }
  // }

  const outOfFrame = (username) => {
    swipee.filter(meme => meme.id !== username)
  }
  return (
    <>
      <div>
        <GrChat />
        <Link to="/profile"><CgProfile /></Link>
      </div>
      <div>
        <link href='https://fonts.googleapis.com/css?family=Damion&display=swap' rel='stylesheet' />
        <link href='https://fonts.googleapis.com/css?family=Alatsi&display=swap' rel='stylesheet' />
        <h1>React Tinder Card</h1>
        <div className='cardContainer'>
          {swipee?.map((cardSwipe, index) =>
            <TinderCard className='swipe' key={cardSwipe.id} onSwipe={(dir) => swiped(dir, cardSwipe.id)} onCardLeftScreen={() => outOfFrame(cardSwipe.id)}>
              <div style={{ backgroundImage: 'url(https://techcommunity.microsoft.com/t5/image/serverpage/image-id/217078i525F6A9EF292601F/image-size/large?v=v2&px=999)' }} className='card'>
                <h3>{cardSwipe.fullname} ({cardSwipe.gender})</h3>
              </div>
              <div className='card'>
                <p>{cardSwipe.description}</p>
                <ul>
                  {cardSwipe.genres.map((genre) =>
                    <li key={genre.genreId}>{genre.name}</li>
                  )}
                </ul>
              </div>
            </TinderCard>
          )}
        </div>
        {match && <p>You matched with {swipee.find(item => item.id === checkingMatch.recieverId).username}</p>}
        {lastDirection ? <h2 className='infoText'>You swiped {lastDirection}</h2> : <h2 className='infoText' />}
      </div>
    </>
  )
}

const mapStateToProps = (globalState) => {
  return {
    user: globalState.user,
    swipee: globalState.swipee,
    match: globalState.match
  }
}

export default connect(mapStateToProps)(Swipe)
