function lost(keyword = string ,input = string) {
  let pattern = /(north|east)\D*(\d{2})[^,]*(,)\D*(\d{6})/gi;
  let messagePattern = new RegExp(`(${keyword})(.*?)(${keyword})`, 'g');
  let message = messagePattern.exec(text)[2];
  
  let lat = ''
  let lon = ''
  let match = pattern.exec(input)
  while(match) {
    if (match[1].toLowerCase() === 'north') 
      lat = `${match[2]}.${match[4]} N`
    else 
      lon = `${match[2]}.${match[4]} E`;

    match = pattern.exec(input)
  }

  console.log(lat)
  console.log(lon)
  console.log(`Message: ${message}`)
}

lost('<>',
'o u%&lu43t&^ftgv><nortH4276hrv756dcc,  jytbu64574655k <>ThE sanDwich is iN the refrIGErator<>yl i75evEAsTer23,lfwe 987324tlblu6b')