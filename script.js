


// all-stuffies-can-chat


pla=0


function clickk(){
  let plac=places[Math.floor(Math.random()*pla)]
  t=document.getElementById('pls').innerHTML=plac
}


// music

musics = [
  'Reggae','Rock','Southern Rock','Hard Rock','Hip Hop','Rap','Punk Rock','Jazz','Pop','Electronic','Dance','Blues','Folk','Funk','Country','Classical','R&B','Heavy Metal','Alternative Rock','Soft Rock','Pop Rock','Soul','Indie','Ambient','New Wave','Disco','Techno','Instrumental','Experimental','Gospel','Christian','Orchestra','Grunge','House','Hardcore Punk','Industrial','Emo','Phychadelic','Glam Rock','Alternative Country','Indie Folk'
]

mus=0
for (x in musics){
  mus+=1
}


function muse(){
  let musc=musics[Math.floor(Math.random()*mus)]
  t=document.getElementById('musc').innerHTML=musc
}
