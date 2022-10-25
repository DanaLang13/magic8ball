function GenerateAnswer() {
    responses = [
      'It is decidedely so',
      'No',
      'Yes definitely',
      'You may rely on it',
      'Without a doubt',
      'Very doubtful',
      'Most likely',
      'Outlook good',
      'Yes',
      'Signs point to yes',
      'Reply hazy, try again',
      'Ask again later',
      'Better not tell you now',
      'Cannot predict now',
      'Concentrate and as again',
      'Dont count on it',
      'My reply is no',
      'My sources say no',
      'Outlook not so good',
    ];
    response = responses[Math.floor(Math.random() * responses.length)];
    document.getElementById('outputDiv').innerHTML = response;
  }
