import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import TinderCard from 'react-tinder-card'
import { fetchMatchUsers } from '../actions'

const db = [

]

function Swipe (props) {
  const characters = db
  const { user, swipee } = props
  console.log(swipee)
  const [lastDirection, setLastDirection] = useState()

  useEffect(() => {
    props.dispatch(fetchMatchUsers(user))
  }, [user])

  const swiped = (direction, nameToDelete) => {
    console.log('removing: ' + nameToDelete)
    setLastDirection(direction)
  }

  const outOfFrame = (name) => {
    console.log(name + ' left the screen!')
  }

  return (
    <div>
      <link href='https://fonts.googleapis.com/css?family=Damion&display=swap' rel='stylesheet' />
      <link href='https://fonts.googleapis.com/css?family=Alatsi&display=swap' rel='stylesheet' />
      <h1>React Tinder Card</h1>
      <div className='cardContainer'>
        {characters.map((character) =>
          <TinderCard className='swipe' key={character.name} onSwipe={(dir) => swiped(dir, character.name)} onCardLeftScreen={() => outOfFrame(character.name)}>
            <div style={{ backgroundImage: 'url(' + character.url + ')' }} className='card'>
              <h3>{character.name}</h3>
            </div>
          </TinderCard>
        )}
      </div>
      {lastDirection ? <h2 className='infoText'>You swiped {lastDirection}</h2> : <h2 className='infoText' />}
    </div>
  )
}

const mapStateToProps = (globalState) => {
  return {
    user: globalState.user,
    swipee: globalState.swipee
  }
}

export default connect(mapStateToProps)(Swipe)
