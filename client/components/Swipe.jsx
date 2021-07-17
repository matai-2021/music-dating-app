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
    if (user.id) {
      props.dispatch(fetchUnMatchedUsers(user))
    }
  }, [user])

  const swiped = (direction, card) => {
    if (direction === 'right' || direction === 'up') {
      const swipe = {
        userId: user.id,
        receiverId: card,
        isMatch: true
      }
      setCheckingMatch(swipe)
      setLastDirection('right')
      return props.dispatch(checkForMatch(swipe))
    } else {
      const swipe = {
        userId: user.id,
        receiverId: card,
        isMatch: false
      }
      setLastDirection('left')
      props.dispatch(checkForMatch(swipe))
      return null
    }
  }

  const outOfFrame = (username) => {
    swipee.filter(meme => meme.id !== username)
  }
  return (
    <>
      <div>
        <Link to="/chat"><GrChat /></Link>
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
                <h3>{cardSwipe.fullname}</h3>
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
