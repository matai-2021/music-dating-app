import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import TinderCard from 'react-tinder-card'
import { fetchUnMatchedUsers, checkForMatch } from '../actions'
import { GrChat } from 'react-icons/gr'
import { CgProfile } from 'react-icons/cg'

function Swipe (props) {
  const { user, swipee, match } = props
  const [lastDirection, setLastDirection] = useState()
  const [checkingMatch, setCheckingMatch] = useState({})

  useEffect(() => {
    if (user.id) {
      props.dispatch(fetchUnMatchedUsers(user))
    }
  }, [user])

  useEffect(() => {
      props.dispatch(fetchUnMatchedUsers(user))
  }, [])

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
    <section className='tinder-card-container'>
      <div className='nav-img'>
        <Link className='img-size' to="/chat"><GrChat /></Link>
        <Link className='img-size' to="/profile"><CgProfile /></Link>
      </div>
      <div>  
        <img className='logo-image' src='/resonatelogoS.png' alt="resonatelogo" />
      </div>
      <div>
        <link href='https://fonts.googleapis.com/css?family=Damion&display=swap' rel='stylesheet' />
        <link href='https://fonts.googleapis.com/css?family=Alatsi&display=swap' rel='stylesheet' />
        <div className='cardContainer'>
          {swipee && swipee?.map((cardSwipe, index) =>
            <TinderCard className='swipe' key={cardSwipe.id} onSwipe={(dir) => swiped(dir, cardSwipe.id)} onCardLeftScreen={() => outOfFrame(cardSwipe.id)}>
              <div style={{ backgroundImage: cardSwipe.imageUrl ? `url(${cardSwipe.imageUrl}` : `url(https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png`}} className='card'>
                <h3>{cardSwipe.fullname}</h3>
              </div>
              <div className='card'>
                <h3>{cardSwipe.description}</h3>
                <ul>
                  {cardSwipe.genres.map((genre) =>
                    <li key={genre.genreId}>{genre.name}</li>
                  )}
                </ul>
              </div>
            </TinderCard>
          )}
        </div>
        {match.isMatch && <p>You matched with {swipee.find(item => item.id === checkingMatch.receiverId).fullname} <Link to="/chat">Chat Now</Link></p>}
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
