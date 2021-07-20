import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import TinderCard from 'react-tinder-card'
import { fetchUnMatchedUsers, checkForMatch, createUserNotification, resetIsMatchState } from '../actions'

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
      const swipe = {
        userId: user.id,
        receiverId: card,
        isMatch: direction === 'right' || direction === 'up'
      }
      setCheckingMatch(swipe)
      setLastDirection(direction === 'right' || direction === 'up' ? 'right' : 'left')
      return props.dispatch(checkForMatch(swipe))
    }
  

  return (
    <section className='tinder-card-container'>
      <div>
        <link href='https://fonts.googleapis.com/css?family=Damion&display=swap' rel='stylesheet' />
        <link href='https://fonts.googleapis.com/css?family=Alatsi&display=swap' rel='stylesheet' />
        <div className='cardContainer'>
          {swipee && swipee?.map((cardSwipe, index) =>
            <TinderCard className='swipe' key={cardSwipe.id} onSwipe={(dir) => swiped(dir, cardSwipe.id)} >
              <div style={{ backgroundImage: cardSwipe.imageUrl ? `url(${cardSwipe.imageUrl}` : `url(https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png`}} className='card'>
                <h3>{cardSwipe.fullname}</h3>
              </div>
              <div className='card'>
                <h5>{cardSwipe.description}</h5>
                <ul>
                  {cardSwipe.genres.map((genre) =>
                    <li key={genre.genreId}>{genre.name}</li>
                  )}
                </ul>
              </div>
            </TinderCard>
          )}
        </div>
        {match.isMatch && <p>{`You matched with ${swipee.find(item => item.id === checkingMatch.receiverId).fullname}`}<Link to='/chat'>Chat Now</Link></p>}
        {lastDirection ? <h2 className='infoText'>You swiped {lastDirection}</h2> : <h2 className='infoText' />}
      </div>
    </section>
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
