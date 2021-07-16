import React, { useState, useEffect, useMemo } from 'react'
import { connect } from 'react-redux'
import TinderCard from 'react-tinder-card'
import { fetchUnMatchedUsers } from '../actions'
import { GrChat } from 'react-icons/gr'
import { CgProfile } from 'react-icons/cg'
import { IoMdThumbsUp, IoMdThumbsDown } from 'react-icons/io'

const alreadyRemoved = []

function Swipe (props) {
  const { user, swipee } = props
  const [lastDirection, setLastDirection] = useState()

  const childRefs = useMemo(() => Array(swipee?.length).fill(0).map(i => React.createRef()), [])
  console.log(childRefs)

  useEffect(() => {
    user.id && props.dispatch(fetchUnMatchedUsers(user))
  }, [user])

  const swiped = (direction, meme) => {
    switch (direction) {
      case 'right':
        setLastDirection('right')
        break
      case 'left':
        setLastDirection('left')
        break
      case 'up':
        setLastDirection('up')
        break
      case 'down':
        setLastDirection('down')
    }
  }

  const swipe = (direction) => {
    const userLeft = swipee.filter(item => !alreadyRemoved.includes(item.username))
    if (userLeft.length) {
      const toBeRemoved = userLeft[userLeft.length - 1].username // Find the card object to be removed
      const index = swipee.map(item => item.username).indexOf(toBeRemoved)
      alreadyRemoved.push(toBeRemoved) // Make sure the next card gets removed next time if this card do not have time to exit the screen
      childRefs[index].current.swipe(direction) // Swipe the card!
    }
  }

  const outOfFrame = (username) => {
    console.log(username + ' left the screen!')
    swipee.filter(meme => meme.id !== username)
  }
  return (
    <>
      <div>
        <GrChat />
        <CgProfile />
      </div>
      <div>
        <link href='https://fonts.googleapis.com/css?family=Damion&display=swap' rel='stylesheet' />
        <link href='https://fonts.googleapis.com/css?family=Alatsi&display=swap' rel='stylesheet' />
        <h1>React Tinder Card</h1>
        <div className='cardContainer'>
          {swipee?.map((cardSwipe, index) =>
            <TinderCard className='swipe' ref={childRefs[index]} key={cardSwipe.username} onSwipe={(dir) => swiped(dir, cardSwipe.username)} onCardLeftScreen={() => outOfFrame(cardSwipe.fullname)}>
              <div style={{ backgroundImage: 'url(https://techcommunity.microsoft.com/t5/image/serverpage/image-id/217078i525F6A9EF292601F/image-size/large?v=v2&px=999)' }} className='card'>
                <h3>{cardSwipe.fullname} ({cardSwipe.name})</h3>
              </div>
              <div className='card'>
                <p>{cardSwipe.description}</p>
                <ul>
                  {cardSwipe.genres.map((genre) =>
                    <li key={genre.id}>{genre.name}</li>
                  )}
                </ul>
              </div>
            </TinderCard>
          )}
        </div>
        <div>
          <button onClick={() => swipe('left')}><IoMdThumbsDown className='thumbDown' /></button>
          <button onClick={() => swipe('right')}><IoMdThumbsUp className='thumbUp'/></button>
        </div>
        {lastDirection ? <h2 className='infoText'>You swiped {lastDirection}</h2> : <h2 className='infoText' />}
      </div>
    </>
  )
}

const mapStateToProps = (globalState) => {
  return {
    user: globalState.user,
    swipee: globalState.swipee
  }
}

export default connect(mapStateToProps)(Swipe)
