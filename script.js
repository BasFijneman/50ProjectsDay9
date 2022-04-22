// generating the audio buttons
const sounds = ['applause', 'boo', 'gasp', 'wrong', 'tada', 'victory']


// looping through sounds, creating a btn for each sounds
sounds.forEach(sound => {
    const btn = document.createElement('button')
    btn.classList.add('btn') //adding the class "btn" to each button

    btn.innerText = sound //the buttons have the text as defined in the variable on top of this document

    btn.addEventListener('click', () => {     //get the sound when clicked on a button 
        stopSongs()


        document.getElementById(sound).play() //HTML gives us the opportunity to play sounds 
    })

    document.getElementById('buttons').appendChild(btn) //inserted the btn class to buttons in HTML
})

function stopSongs() {   //function to stop the sounds while another sound is activated
    sounds.forEach(sound => {            //looping through the sound array
        const song = document.getElementById(sound)

        song.pause()
        song.currentTime = 0;       //pausing the sound and resetting the timer to 0
    })
    
}