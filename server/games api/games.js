const games = [
  {
    id: 1,
    name: "Final Fantasy.VII",
    Platform: "PS5",
    Genre: [
      "Action" , "Adventure"
    ],
    price: 36.50,
    old_price: 59.90,
    description: "FFVII Remake Intergrade, an enhanced edition of the celebrated Final Fantasy VII remake, unfolds an enthralling saga with Yuffie at the forefront. The game immerses players in the vibrant city of Midgar, boasting upgraded graphics and gameplay innovations leveraging PS5's cutting-edge hardware. A dual-mode experience offers the choice between 'Graphic Mode' for stunning 4K visuals and 'Performance Mode' ensuring fluid 60 FPS action. The customizable 'Photo Mode' captures and shares memorable in-game moments. Embark on Yuffie's journey to infiltrate Shinra Corporation, reclaim potent artifacts, and restore glory to her homeland. With new characters, extended gameplay, and optimized loading, FFVII Remake Intergrade promises an unforgettable adventure, catering to both dedicated fans and newcomers alike.",
    poster: "https://s.pacn.ws/1/p/10t/final-fantasy-vii-remake-intergrade-662937.6.jpg?v=qp9r86&width=800&crop=800,999",
    images: [
      "https://s.pacn.ws/1/p/10t/final-fantasy-vii-remake-intergrade-662937.2.jpg?v=qp9r71&width=300&crop=1600,900",
      "https://s.pacn.ws/1/p/10t/final-fantasy-vii-remake-intergrade-662937.3.jpg?v=qp9r71&width=300&crop=1600,900",
      "https://s.pacn.ws/1/p/10t/final-fantasy-vii-remake-intergrade-662937.4.jpg?v=qp9r71&width=300&crop=1280,720",
      "https://s.pacn.ws/1/p/10t/final-fantasy-vii-remake-intergrade-662937.5.jpg?v=qp9r71&width=300&crop=1280,720"
    ]
  },
  {
    id: 2,
    name: "Assassin’s Creed Mirage",
    Platform: "PS4",
    Genre: [
      "Action" , "Adventure"
    ],
    price: 39.99,
    old_price: 59.99,
    description: "Play as a cunning young street thief seeking answers in this majestic Middle Eastern open world.Experience the home of the original Assassins in this exciting new narrative-driven, open world adventure.15 years since the first Assassin’s Creed redefined adventure, experience the franchises’ trademark parkour and stealth like never before – in Assasin’s Creed Mirage.In this smaller scale, back to basics Assassin’s caper, you play Basim, a young street thief seeking answers. Roam the richly-detailed, reactive and vibrant streets of 9th century Baghdad, uncovering the mysteries of the past as you fight to secure your future.Stalk the shadows. Become the ultimate assassin.",
    characteristics: "Characteristics for Game 2",
    poster: "https://i0.wp.com/images.vfl.ru/ii/1696928090/cd438cd8/39032848.jpg?ssl=1",
    images: [
      "https://gmedia.playstation.com/is/image/SIEPDC/assassins-creed-mirage-screenshot-03-en-19oct22?$1600px$",
      "https://gmedia.playstation.com/is/image/SIEPDC/assassins-creed-mirage-screenshot-01-en-19oct22?$1600px$"
    ]
  },
  {
    id: 3,
    name: "EA SPORTS FC 24",
    Platform: "PS4",
    Genre: [
      "Sport"
    ],
    price: 49.99,
    old_price: 69.99,
    description: "A SPORTS FC™ 24 marks the beginning of the future of football. Built on innovation and authenticity, feel closer to the game in the most true-to-football experience yet with the best players from the biggest clubs, leagues and competitions around the globe.Experience unparalleled realism in every match thanks to three cutting-edge technologies: HyperMotionV, PlayStyles optimized by Opta and the enhanced Frostbite™ Engine.With more than 19,000 fully licensed players, 700 teams and 30 leagues including the UEFA Men’s and Women’s Champions League, EA SPORTS FC 24 brings unrivalled authenticity to the pitch.",
    poster: "https://i0.wp.com/images.vfl.ru/ii/1696250976/cac8d0a1/39022607.jpg?ssl=1",
    images: [
      "https://www.afrik-foot.com/wp-content/uploads/2023/07/jaquette-ea-sports-fc-24.jpg.webp", 
      "https://media.wired.com/photos/6516df152a96d14834d98190/master/w_1920,c_limit/EA-FC-Is-Just-FIFA-Culture.jpg", 
      "http://cdn.playmaroc.com/wp-content/uploads/2023/07/ea-sports-fc-24-ps5-2-1024x576.jpg"
    ]
  },
  {
    id: 4,
    name: "God of War Ragnarok",
    Platform: "PS4",
    Genre: [
      "Action"
    ],
    price: 39.99,
    old_price: 49.99,
    description: "From Santa Monica Studio comes the sequel to the critically acclaimed God of War (2018).Join Kratos and Atreus on a mythic journey for answers before Ragnarök arrives. Together, father and son must put everything on the line as they journey to each of the Nine Realms.Throughout stunning mythological landscapes, they’ll face fearsome enemies – from Norse gods to wild beasts – as they prepare for the showdown of their lives.Armed with his trusty weapons of war – including the Leviathan Axe and the Blades of Chaos – Kratos’ deadly skills will be tested like never before as he fights to protect his family. ",
    poster: "https://i0.wp.com/images.vfl.ru/ii/1668003490/1ef4e00b/38638574.jpg?ssl=1",
    images: [
      "https://i0.wp.com/image.api.playstation.com/vulcan/ap/rnd/202207/1117/WERD9QwOeuJ257snQnLhOob8.jpg?w=1600&resize=1600&ssl=1", 
      "https://i0.wp.com/image.api.playstation.com/vulcan/ap/rnd/202207/1117/NbH8trRlNM7tXO8cPm4Bfkew.jpg?w=1600&resize=1600&ssl=1", 
      "https://i0.wp.com/image.api.playstation.com/vulcan/ap/rnd/202207/1117/gjZf7QAeZ195d7KKPVHLM6QU.jpg?w=1600&resize=1600&ssl=1"
    ]
  },
  {
    id: 5,
    name: "Street Fighter 6",
    Platform: "PS4",
    Genre: [
      "Fighting"
    ],
    price: 59.99,
    old_price: 39.99,
    description: "Powered by Capcom’s proprietary RE ENGINE, the Street Fighter 6 experience spans across three distinct game modes featuring World Tour, Fighting Ground and Battle Hub.Diverse Roster of 18 FightersPlay legendary masters and new fan favorites like Ryu, Chun-Li, Luke, Jamie, Kimberly and more in this latest edition with each character featuring striking new redesigns and exhilarating cinematic specials.",
    poster: "https://1.bp.blogspot.com/-CZddmNwsFcI/ZIPCo8ZYiCI/AAAAAAAACGw/yFtVTw5VWF0afMoCopzr0yfH8xW6OGfDQCNcBGAsYHQ/s0/1.jpg",
    images: [
      "https://1.bp.blogspot.com/-ShIT3vaobd4/ZIPCzPTMo1I/AAAAAAAACG0/rlFi4sV558QJyZ7UKK-GWMr4jXCSDu3nQCNcBGAsYHQ/s0/1a.jpg", 
      "https://1.bp.blogspot.com/-1oJiwsMSX64/ZIPCzPPhkzI/AAAAAAAACG4/6kp5q9FZSbEOAbiLTmPdPfG3QtufmtfvgCNcBGAsYHQ/s0/1b.jpg", 
    ]
  },
  {
    id: 6,
    name: "Final Fantasy.VII",
    Platform: "PS5",
    Genre: [
      "Action" , "Adventure"
    ],
    price: 36.50,
    old_price: 59.90,
    description: "FFVII Remake Intergrade, an enhanced edition of the celebrated Final Fantasy VII remake, unfolds an enthralling saga with Yuffie at the forefront. The game immerses players in the vibrant city of Midgar, boasting upgraded graphics and gameplay innovations leveraging PS5's cutting-edge hardware. A dual-mode experience offers the choice between 'Graphic Mode' for stunning 4K visuals and 'Performance Mode' ensuring fluid 60 FPS action. The customizable 'Photo Mode' captures and shares memorable in-game moments. Embark on Yuffie's journey to infiltrate Shinra Corporation, reclaim potent artifacts, and restore glory to her homeland. With new characters, extended gameplay, and optimized loading, FFVII Remake Intergrade promises an unforgettable adventure, catering to both dedicated fans and newcomers alike.",
    poster: "https://i0.wp.com/images.vfl.ru/ii/1670535497/93cfc2bd/38665474.jpg?ssl=1",
    images: [
      "https://s.pacn.ws/1/p/10t/final-fantasy-vii-remake-intergrade-662937.2.jpg?v=qp9r71&width=300&crop=1600,900",
      "https://s.pacn.ws/1/p/10t/final-fantasy-vii-remake-intergrade-662937.3.jpg?v=qp9r71&width=300&crop=1600,900",
      "https://s.pacn.ws/1/p/10t/final-fantasy-vii-remake-intergrade-662937.4.jpg?v=qp9r71&width=300&crop=1280,720",
      "https://s.pacn.ws/1/p/10t/final-fantasy-vii-remake-intergrade-662937.5.jpg?v=qp9r71&width=300&crop=1280,720"
    ]
  },
  {
    id: 7,
    name: "Assassin’s Creed Mirage",
    Platform: "PS4",
    Genre: [
      "Action" , "Adventure"
    ],
    price: 39.99,
    old_price: 59.99,
    description: "Play as a cunning young street thief seeking answers in this majestic Middle Eastern open world.Experience the home of the original Assassins in this exciting new narrative-driven, open world adventure.15 years since the first Assassin’s Creed redefined adventure, experience the franchises’ trademark parkour and stealth like never before – in Assasin’s Creed Mirage.In this smaller scale, back to basics Assassin’s caper, you play Basim, a young street thief seeking answers. Roam the richly-detailed, reactive and vibrant streets of 9th century Baghdad, uncovering the mysteries of the past as you fight to secure your future.Stalk the shadows. Become the ultimate assassin.",
    characteristics: "Characteristics for Game 2",
    poster: "https://i0.wp.com/images.vfl.ru/ii/1696928090/cd438cd8/39032848.jpg?ssl=1",
    images: [
      "https://gmedia.playstation.com/is/image/SIEPDC/assassins-creed-mirage-screenshot-03-en-19oct22?$1600px$",
      "https://gmedia.playstation.com/is/image/SIEPDC/assassins-creed-mirage-screenshot-01-en-19oct22?$1600px$"
    ]
  },
  {
    id: 8,
    name: "EA SPORTS FC 24",
    Platform: "PS4",
    Genre: [
      "Sport"
    ],
    price: 49.99,
    old_price: 69.99,
    description: "A SPORTS FC™ 24 marks the beginning of the future of football. Built on innovation and authenticity, feel closer to the game in the most true-to-football experience yet with the best players from the biggest clubs, leagues and competitions around the globe.Experience unparalleled realism in every match thanks to three cutting-edge technologies: HyperMotionV, PlayStyles optimized by Opta and the enhanced Frostbite™ Engine.With more than 19,000 fully licensed players, 700 teams and 30 leagues including the UEFA Men’s and Women’s Champions League, EA SPORTS FC 24 brings unrivalled authenticity to the pitch.",
    poster: "https://i0.wp.com/images.vfl.ru/ii/1696250976/cac8d0a1/39022607.jpg?ssl=1",
    images: [
      "https://www.afrik-foot.com/wp-content/uploads/2023/07/jaquette-ea-sports-fc-24.jpg.webp", 
      "https://media.wired.com/photos/6516df152a96d14834d98190/master/w_1920,c_limit/EA-FC-Is-Just-FIFA-Culture.jpg", 
      "http://cdn.playmaroc.com/wp-content/uploads/2023/07/ea-sports-fc-24-ps5-2-1024x576.jpg"
    ]
  },
  {
    id: 9,
    name: "God of War Ragnarok",
    Platform: "PS4",
    Genre: [
      "Action"
    ],
    price: 39.99,
    old_price: 49.99,
    description: "From Santa Monica Studio comes the sequel to the critically acclaimed God of War (2018).Join Kratos and Atreus on a mythic journey for answers before Ragnarök arrives. Together, father and son must put everything on the line as they journey to each of the Nine Realms.Throughout stunning mythological landscapes, they’ll face fearsome enemies – from Norse gods to wild beasts – as they prepare for the showdown of their lives.Armed with his trusty weapons of war – including the Leviathan Axe and the Blades of Chaos – Kratos’ deadly skills will be tested like never before as he fights to protect his family. ",
    poster: "https://i0.wp.com/images.vfl.ru/ii/1668003490/1ef4e00b/38638574.jpg?ssl=1",
    images: [
      "https://i0.wp.com/image.api.playstation.com/vulcan/ap/rnd/202207/1117/WERD9QwOeuJ257snQnLhOob8.jpg?w=1600&resize=1600&ssl=1", 
      "https://i0.wp.com/image.api.playstation.com/vulcan/ap/rnd/202207/1117/NbH8trRlNM7tXO8cPm4Bfkew.jpg?w=1600&resize=1600&ssl=1", 
      "https://i0.wp.com/image.api.playstation.com/vulcan/ap/rnd/202207/1117/gjZf7QAeZ195d7KKPVHLM6QU.jpg?w=1600&resize=1600&ssl=1"
    ]
  },
  {
    id: 10,
    name: "Street Fighter 6",
    Platform: "PS4",
    Genre: [
      "Fighting"
    ],
    price: 59.99,
    old_price: 39.99,
    description: "Powered by Capcom’s proprietary RE ENGINE, the Street Fighter 6 experience spans across three distinct game modes featuring World Tour, Fighting Ground and Battle Hub.Diverse Roster of 18 FightersPlay legendary masters and new fan favorites like Ryu, Chun-Li, Luke, Jamie, Kimberly and more in this latest edition with each character featuring striking new redesigns and exhilarating cinematic specials.",
    poster: "https://1.bp.blogspot.com/-CZddmNwsFcI/ZIPCo8ZYiCI/AAAAAAAACGw/yFtVTw5VWF0afMoCopzr0yfH8xW6OGfDQCNcBGAsYHQ/s0/1.jpg",
    images: [
      "https://1.bp.blogspot.com/-ShIT3vaobd4/ZIPCzPTMo1I/AAAAAAAACG0/rlFi4sV558QJyZ7UKK-GWMr4jXCSDu3nQCNcBGAsYHQ/s0/1a.jpg", 
      "https://1.bp.blogspot.com/-1oJiwsMSX64/ZIPCzPPhkzI/AAAAAAAACG4/6kp5q9FZSbEOAbiLTmPdPfG3QtufmtfvgCNcBGAsYHQ/s0/1b.jpg", 
    ]
  },
  {
    id: 11,
    name: "Final Fantasy.VII",
    Platform: "PS5",
    Genre: [
      "Action" , "Adventure"
    ],
    price: 36.50,
    old_price: 59.90,
    description: "FFVII Remake Intergrade, an enhanced edition of the celebrated Final Fantasy VII remake, unfolds an enthralling saga with Yuffie at the forefront. The game immerses players in the vibrant city of Midgar, boasting upgraded graphics and gameplay innovations leveraging PS5's cutting-edge hardware. A dual-mode experience offers the choice between 'Graphic Mode' for stunning 4K visuals and 'Performance Mode' ensuring fluid 60 FPS action. The customizable 'Photo Mode' captures and shares memorable in-game moments. Embark on Yuffie's journey to infiltrate Shinra Corporation, reclaim potent artifacts, and restore glory to her homeland. With new characters, extended gameplay, and optimized loading, FFVII Remake Intergrade promises an unforgettable adventure, catering to both dedicated fans and newcomers alike.",
    poster: "https://s.pacn.ws/1/p/10t/final-fantasy-vii-remake-intergrade-662937.6.jpg?v=qp9r86&width=800&crop=800,999",
    images: [
      "https://s.pacn.ws/1/p/10t/final-fantasy-vii-remake-intergrade-662937.2.jpg?v=qp9r71&width=300&crop=1600,900",
      "https://s.pacn.ws/1/p/10t/final-fantasy-vii-remake-intergrade-662937.3.jpg?v=qp9r71&width=300&crop=1600,900",
      "https://s.pacn.ws/1/p/10t/final-fantasy-vii-remake-intergrade-662937.4.jpg?v=qp9r71&width=300&crop=1280,720",
      "https://s.pacn.ws/1/p/10t/final-fantasy-vii-remake-intergrade-662937.5.jpg?v=qp9r71&width=300&crop=1280,720"
    ]
  },
  {
    id: 12,
    name: "Assassin’s Creed Mirage",
    Platform: "PS4",
    Genre: [
      "Action" , "Adventure"
    ],
    price: 39.99,
    old_price: 59.99,
    description: "Play as a cunning young street thief seeking answers in this majestic Middle Eastern open world.Experience the home of the original Assassins in this exciting new narrative-driven, open world adventure.15 years since the first Assassin’s Creed redefined adventure, experience the franchises’ trademark parkour and stealth like never before – in Assasin’s Creed Mirage.In this smaller scale, back to basics Assassin’s caper, you play Basim, a young street thief seeking answers. Roam the richly-detailed, reactive and vibrant streets of 9th century Baghdad, uncovering the mysteries of the past as you fight to secure your future.Stalk the shadows. Become the ultimate assassin.",
    characteristics: "Characteristics for Game 2",
    poster: "https://i0.wp.com/images.vfl.ru/ii/1696928090/cd438cd8/39032848.jpg?ssl=1",
    images: [
      "https://gmedia.playstation.com/is/image/SIEPDC/assassins-creed-mirage-screenshot-03-en-19oct22?$1600px$",
      "https://gmedia.playstation.com/is/image/SIEPDC/assassins-creed-mirage-screenshot-01-en-19oct22?$1600px$"
    ]
  },
  {
    id: 13,
    name: "EA SPORTS FC 24",
    Platform: "PS4",
    Genre: [
      "Sport"
    ],
    price: 49.99,
    old_price: 69.99,
    description: "A SPORTS FC™ 24 marks the beginning of the future of football. Built on innovation and authenticity, feel closer to the game in the most true-to-football experience yet with the best players from the biggest clubs, leagues and competitions around the globe.Experience unparalleled realism in every match thanks to three cutting-edge technologies: HyperMotionV, PlayStyles optimized by Opta and the enhanced Frostbite™ Engine.With more than 19,000 fully licensed players, 700 teams and 30 leagues including the UEFA Men’s and Women’s Champions League, EA SPORTS FC 24 brings unrivalled authenticity to the pitch.",
    poster: "https://i0.wp.com/images.vfl.ru/ii/1696250976/cac8d0a1/39022607.jpg?ssl=1",
    images: [
      "https://www.afrik-foot.com/wp-content/uploads/2023/07/jaquette-ea-sports-fc-24.jpg.webp", 
      "https://media.wired.com/photos/6516df152a96d14834d98190/master/w_1920,c_limit/EA-FC-Is-Just-FIFA-Culture.jpg", 
      "http://cdn.playmaroc.com/wp-content/uploads/2023/07/ea-sports-fc-24-ps5-2-1024x576.jpg"
    ]
  },
  {
    id: 14,
    name: "God of War Ragnarok",
    Platform: "PS4",
    Genre: [
      "Action"
    ],
    price: 39.99,
    old_price: 49.99,
    description: "From Santa Monica Studio comes the sequel to the critically acclaimed God of War (2018).Join Kratos and Atreus on a mythic journey for answers before Ragnarök arrives. Together, father and son must put everything on the line as they journey to each of the Nine Realms.Throughout stunning mythological landscapes, they’ll face fearsome enemies – from Norse gods to wild beasts – as they prepare for the showdown of their lives.Armed with his trusty weapons of war – including the Leviathan Axe and the Blades of Chaos – Kratos’ deadly skills will be tested like never before as he fights to protect his family. ",
    poster: "https://i0.wp.com/images.vfl.ru/ii/1668003490/1ef4e00b/38638574.jpg?ssl=1",
    images: [
      "https://i0.wp.com/image.api.playstation.com/vulcan/ap/rnd/202207/1117/WERD9QwOeuJ257snQnLhOob8.jpg?w=1600&resize=1600&ssl=1", 
      "https://i0.wp.com/image.api.playstation.com/vulcan/ap/rnd/202207/1117/NbH8trRlNM7tXO8cPm4Bfkew.jpg?w=1600&resize=1600&ssl=1", 
      "https://i0.wp.com/image.api.playstation.com/vulcan/ap/rnd/202207/1117/gjZf7QAeZ195d7KKPVHLM6QU.jpg?w=1600&resize=1600&ssl=1"
    ]
  },
  {
    id: 15,
    name: "Street Fighter 6",
    Platform: "PS4",
    Genre: [
      "Fighting"
    ],
    price: 59.99,
    old_price: 39.99,
    description: "Powered by Capcom’s proprietary RE ENGINE, the Street Fighter 6 experience spans across three distinct game modes featuring World Tour, Fighting Ground and Battle Hub.Diverse Roster of 18 FightersPlay legendary masters and new fan favorites like Ryu, Chun-Li, Luke, Jamie, Kimberly and more in this latest edition with each character featuring striking new redesigns and exhilarating cinematic specials.",
    poster: "https://1.bp.blogspot.com/-CZddmNwsFcI/ZIPCo8ZYiCI/AAAAAAAACGw/yFtVTw5VWF0afMoCopzr0yfH8xW6OGfDQCNcBGAsYHQ/s0/1.jpg",
    images: [
      "https://1.bp.blogspot.com/-ShIT3vaobd4/ZIPCzPTMo1I/AAAAAAAACG0/rlFi4sV558QJyZ7UKK-GWMr4jXCSDu3nQCNcBGAsYHQ/s0/1a.jpg", 
      "https://1.bp.blogspot.com/-1oJiwsMSX64/ZIPCzPPhkzI/AAAAAAAACG4/6kp5q9FZSbEOAbiLTmPdPfG3QtufmtfvgCNcBGAsYHQ/s0/1b.jpg", 
    ]
  },
  {
    id: 16,
    name: "Final Fantasy.VII",
    Platform: "PS5",
    Genre: [
      "Action" , "Adventure"
    ],
    price: 36.50,
    old_price: 59.90,
    description: "FFVII Remake Intergrade, an enhanced edition of the celebrated Final Fantasy VII remake, unfolds an enthralling saga with Yuffie at the forefront. The game immerses players in the vibrant city of Midgar, boasting upgraded graphics and gameplay innovations leveraging PS5's cutting-edge hardware. A dual-mode experience offers the choice between 'Graphic Mode' for stunning 4K visuals and 'Performance Mode' ensuring fluid 60 FPS action. The customizable 'Photo Mode' captures and shares memorable in-game moments. Embark on Yuffie's journey to infiltrate Shinra Corporation, reclaim potent artifacts, and restore glory to her homeland. With new characters, extended gameplay, and optimized loading, FFVII Remake Intergrade promises an unforgettable adventure, catering to both dedicated fans and newcomers alike.",
    poster: "https://s.pacn.ws/1/p/10t/final-fantasy-vii-remake-intergrade-662937.6.jpg?v=qp9r86&width=800&crop=800,999",
    images: [
      "https://s.pacn.ws/1/p/10t/final-fantasy-vii-remake-intergrade-662937.2.jpg?v=qp9r71&width=300&crop=1600,900",
      "https://s.pacn.ws/1/p/10t/final-fantasy-vii-remake-intergrade-662937.3.jpg?v=qp9r71&width=300&crop=1600,900",
      "https://s.pacn.ws/1/p/10t/final-fantasy-vii-remake-intergrade-662937.4.jpg?v=qp9r71&width=300&crop=1280,720",
      "https://s.pacn.ws/1/p/10t/final-fantasy-vii-remake-intergrade-662937.5.jpg?v=qp9r71&width=300&crop=1280,720"
    ]
  },
  {
    id: 17,
    name: "Assassin’s Creed Mirage",
    Platform: "PS4",
    Genre: [
      "Action" , "Adventure"
    ],
    price: 39.99,
    old_price: 59.99,
    description: "Play as a cunning young street thief seeking answers in this majestic Middle Eastern open world.Experience the home of the original Assassins in this exciting new narrative-driven, open world adventure.15 years since the first Assassin’s Creed redefined adventure, experience the franchises’ trademark parkour and stealth like never before – in Assasin’s Creed Mirage.In this smaller scale, back to basics Assassin’s caper, you play Basim, a young street thief seeking answers. Roam the richly-detailed, reactive and vibrant streets of 9th century Baghdad, uncovering the mysteries of the past as you fight to secure your future.Stalk the shadows. Become the ultimate assassin.",
    characteristics: "Characteristics for Game 2",
    poster: "https://i0.wp.com/images.vfl.ru/ii/1696928090/cd438cd8/39032848.jpg?ssl=1",
    images: [
      "https://gmedia.playstation.com/is/image/SIEPDC/assassins-creed-mirage-screenshot-03-en-19oct22?$1600px$",
      "https://gmedia.playstation.com/is/image/SIEPDC/assassins-creed-mirage-screenshot-01-en-19oct22?$1600px$"
    ]
  },
  {
    id: 18,
    name: "EA SPORTS FC 24",
    Platform: "PS4",
    Genre: [
      "Sport"
    ],
    price: 49.99,
    old_price: 69.99,
    description: "A SPORTS FC™ 24 marks the beginning of the future of football. Built on innovation and authenticity, feel closer to the game in the most true-to-football experience yet with the best players from the biggest clubs, leagues and competitions around the globe.Experience unparalleled realism in every match thanks to three cutting-edge technologies: HyperMotionV, PlayStyles optimized by Opta and the enhanced Frostbite™ Engine.With more than 19,000 fully licensed players, 700 teams and 30 leagues including the UEFA Men’s and Women’s Champions League, EA SPORTS FC 24 brings unrivalled authenticity to the pitch.",
    poster: "https://i0.wp.com/images.vfl.ru/ii/1696250976/cac8d0a1/39022607.jpg?ssl=1",
    images: [
      "https://www.afrik-foot.com/wp-content/uploads/2023/07/jaquette-ea-sports-fc-24.jpg.webp", 
      "https://media.wired.com/photos/6516df152a96d14834d98190/master/w_1920,c_limit/EA-FC-Is-Just-FIFA-Culture.jpg", 
      "http://cdn.playmaroc.com/wp-content/uploads/2023/07/ea-sports-fc-24-ps5-2-1024x576.jpg"
    ]
  },
  {
    id: 19,
    name: "God of War Ragnarok",
    Platform: "PS4",
    Genre: [
      "Action"
    ],
    price: 39.99,
    old_price: 49.99,
    description: "From Santa Monica Studio comes the sequel to the critically acclaimed God of War (2018).Join Kratos and Atreus on a mythic journey for answers before Ragnarök arrives. Together, father and son must put everything on the line as they journey to each of the Nine Realms.Throughout stunning mythological landscapes, they’ll face fearsome enemies – from Norse gods to wild beasts – as they prepare for the showdown of their lives.Armed with his trusty weapons of war – including the Leviathan Axe and the Blades of Chaos – Kratos’ deadly skills will be tested like never before as he fights to protect his family. ",
    poster: "https://i0.wp.com/images.vfl.ru/ii/1668003490/1ef4e00b/38638574.jpg?ssl=1",
    images: [
      "https://i0.wp.com/image.api.playstation.com/vulcan/ap/rnd/202207/1117/WERD9QwOeuJ257snQnLhOob8.jpg?w=1600&resize=1600&ssl=1", 
      "https://i0.wp.com/image.api.playstation.com/vulcan/ap/rnd/202207/1117/NbH8trRlNM7tXO8cPm4Bfkew.jpg?w=1600&resize=1600&ssl=1", 
      "https://i0.wp.com/image.api.playstation.com/vulcan/ap/rnd/202207/1117/gjZf7QAeZ195d7KKPVHLM6QU.jpg?w=1600&resize=1600&ssl=1"
    ]
  },
  {
    id: 20,
    name: "Street Fighter 6",
    Platform: "PS4",
    Genre: [
      "Fighting"
    ],
    price: 59.99,
    old_price: 39.99,
    description: "Powered by Capcom’s proprietary RE ENGINE, the Street Fighter 6 experience spans across three distinct game modes featuring World Tour, Fighting Ground and Battle Hub.Diverse Roster of 18 FightersPlay legendary masters and new fan favorites like Ryu, Chun-Li, Luke, Jamie, Kimberly and more in this latest edition with each character featuring striking new redesigns and exhilarating cinematic specials.",
    poster: "https://1.bp.blogspot.com/-CZddmNwsFcI/ZIPCo8ZYiCI/AAAAAAAACGw/yFtVTw5VWF0afMoCopzr0yfH8xW6OGfDQCNcBGAsYHQ/s0/1.jpg",
    images: [
      "https://1.bp.blogspot.com/-ShIT3vaobd4/ZIPCzPTMo1I/AAAAAAAACG0/rlFi4sV558QJyZ7UKK-GWMr4jXCSDu3nQCNcBGAsYHQ/s0/1a.jpg", 
      "https://1.bp.blogspot.com/-1oJiwsMSX64/ZIPCzPPhkzI/AAAAAAAACG4/6kp5q9FZSbEOAbiLTmPdPfG3QtufmtfvgCNcBGAsYHQ/s0/1b.jpg", 
    ]
  },
  {
    id: 21,
    name: "Final Fantasy.VII",
    Platform: "PS5",
    Genre: [
      "Action" , "Adventure"
    ],
    price: 36.50,
    old_price: 59.90,
    description: "FFVII Remake Intergrade, an enhanced edition of the celebrated Final Fantasy VII remake, unfolds an enthralling saga with Yuffie at the forefront. The game immerses players in the vibrant city of Midgar, boasting upgraded graphics and gameplay innovations leveraging PS5's cutting-edge hardware. A dual-mode experience offers the choice between 'Graphic Mode' for stunning 4K visuals and 'Performance Mode' ensuring fluid 60 FPS action. The customizable 'Photo Mode' captures and shares memorable in-game moments. Embark on Yuffie's journey to infiltrate Shinra Corporation, reclaim potent artifacts, and restore glory to her homeland. With new characters, extended gameplay, and optimized loading, FFVII Remake Intergrade promises an unforgettable adventure, catering to both dedicated fans and newcomers alike.",
    poster: "https://s.pacn.ws/1/p/10t/final-fantasy-vii-remake-intergrade-662937.6.jpg?v=qp9r86&width=800&crop=800,999",
    images: [
      "https://s.pacn.ws/1/p/10t/final-fantasy-vii-remake-intergrade-662937.2.jpg?v=qp9r71&width=300&crop=1600,900",
      "https://s.pacn.ws/1/p/10t/final-fantasy-vii-remake-intergrade-662937.3.jpg?v=qp9r71&width=300&crop=1600,900",
      "https://s.pacn.ws/1/p/10t/final-fantasy-vii-remake-intergrade-662937.4.jpg?v=qp9r71&width=300&crop=1280,720",
      "https://s.pacn.ws/1/p/10t/final-fantasy-vii-remake-intergrade-662937.5.jpg?v=qp9r71&width=300&crop=1280,720"
    ]
  },
  {
    id: 22,
    name: "Assassin’s Creed Mirage",
    Platform: "PS4",
    Genre: [
      "Action" , "Adventure"
    ],
    price: 39.99,
    old_price: 59.99,
    description: "Play as a cunning young street thief seeking answers in this majestic Middle Eastern open world.Experience the home of the original Assassins in this exciting new narrative-driven, open world adventure.15 years since the first Assassin’s Creed redefined adventure, experience the franchises’ trademark parkour and stealth like never before – in Assasin’s Creed Mirage.In this smaller scale, back to basics Assassin’s caper, you play Basim, a young street thief seeking answers. Roam the richly-detailed, reactive and vibrant streets of 9th century Baghdad, uncovering the mysteries of the past as you fight to secure your future.Stalk the shadows. Become the ultimate assassin.",
    characteristics: "Characteristics for Game 2",
    poster: "https://i0.wp.com/images.vfl.ru/ii/1696928090/cd438cd8/39032848.jpg?ssl=1",
    images: [
      "https://gmedia.playstation.com/is/image/SIEPDC/assassins-creed-mirage-screenshot-03-en-19oct22?$1600px$",
      "https://gmedia.playstation.com/is/image/SIEPDC/assassins-creed-mirage-screenshot-01-en-19oct22?$1600px$"
    ]
  },
  {
    id: 23,
    name: "EA SPORTS FC 24",
    Platform: "PS4",
    Genre: [
      "Sport"
    ],
    price: 49.99,
    old_price: 69.99,
    description: "A SPORTS FC™ 24 marks the beginning of the future of football. Built on innovation and authenticity, feel closer to the game in the most true-to-football experience yet with the best players from the biggest clubs, leagues and competitions around the globe.Experience unparalleled realism in every match thanks to three cutting-edge technologies: HyperMotionV, PlayStyles optimized by Opta and the enhanced Frostbite™ Engine.With more than 19,000 fully licensed players, 700 teams and 30 leagues including the UEFA Men’s and Women’s Champions League, EA SPORTS FC 24 brings unrivalled authenticity to the pitch.",
    poster: "https://i0.wp.com/images.vfl.ru/ii/1696250976/cac8d0a1/39022607.jpg?ssl=1",
    images: [
      "https://www.afrik-foot.com/wp-content/uploads/2023/07/jaquette-ea-sports-fc-24.jpg.webp", 
      "https://media.wired.com/photos/6516df152a96d14834d98190/master/w_1920,c_limit/EA-FC-Is-Just-FIFA-Culture.jpg", 
      "http://cdn.playmaroc.com/wp-content/uploads/2023/07/ea-sports-fc-24-ps5-2-1024x576.jpg"
    ]
  },
  {
    id: 24,
    name: "God of War Ragnarok",
    Platform: "PS4",
    Genre: [
      "Action"
    ],
    price: 39.99,
    old_price: 49.99,
    description: "From Santa Monica Studio comes the sequel to the critically acclaimed God of War (2018).Join Kratos and Atreus on a mythic journey for answers before Ragnarök arrives. Together, father and son must put everything on the line as they journey to each of the Nine Realms.Throughout stunning mythological landscapes, they’ll face fearsome enemies – from Norse gods to wild beasts – as they prepare for the showdown of their lives.Armed with his trusty weapons of war – including the Leviathan Axe and the Blades of Chaos – Kratos’ deadly skills will be tested like never before as he fights to protect his family. ",
    poster: "https://i0.wp.com/images.vfl.ru/ii/1668003490/1ef4e00b/38638574.jpg?ssl=1",
    images: [
      "https://i0.wp.com/image.api.playstation.com/vulcan/ap/rnd/202207/1117/WERD9QwOeuJ257snQnLhOob8.jpg?w=1600&resize=1600&ssl=1", 
      "https://i0.wp.com/image.api.playstation.com/vulcan/ap/rnd/202207/1117/NbH8trRlNM7tXO8cPm4Bfkew.jpg?w=1600&resize=1600&ssl=1", 
      "https://i0.wp.com/image.api.playstation.com/vulcan/ap/rnd/202207/1117/gjZf7QAeZ195d7KKPVHLM6QU.jpg?w=1600&resize=1600&ssl=1"
    ]
  },
  {
    id: 25,
    name: "Street Fighter 6",
    Platform: "PS4",
    Genre: [
      "Fighting"
    ],
    price: 59.99,
    old_price: 39.99,
    description: "Powered by Capcom’s proprietary RE ENGINE, the Street Fighter 6 experience spans across three distinct game modes featuring World Tour, Fighting Ground and Battle Hub.Diverse Roster of 18 FightersPlay legendary masters and new fan favorites like Ryu, Chun-Li, Luke, Jamie, Kimberly and more in this latest edition with each character featuring striking new redesigns and exhilarating cinematic specials.",
    poster: "https://1.bp.blogspot.com/-CZddmNwsFcI/ZIPCo8ZYiCI/AAAAAAAACGw/yFtVTw5VWF0afMoCopzr0yfH8xW6OGfDQCNcBGAsYHQ/s0/1.jpg",
    images: [
      "https://1.bp.blogspot.com/-ShIT3vaobd4/ZIPCzPTMo1I/AAAAAAAACG0/rlFi4sV558QJyZ7UKK-GWMr4jXCSDu3nQCNcBGAsYHQ/s0/1a.jpg", 
      "https://1.bp.blogspot.com/-1oJiwsMSX64/ZIPCzPPhkzI/AAAAAAAACG4/6kp5q9FZSbEOAbiLTmPdPfG3QtufmtfvgCNcBGAsYHQ/s0/1b.jpg", 
    ]
  },
  {
    id: 26,
    name: "Final Fantasy.VII",
    Platform: "PS5",
    Genre: [
      "Action" , "Adventure"
    ],
    price: 36.50,
    old_price: 59.90,
    description: "FFVII Remake Intergrade, an enhanced edition of the celebrated Final Fantasy VII remake, unfolds an enthralling saga with Yuffie at the forefront. The game immerses players in the vibrant city of Midgar, boasting upgraded graphics and gameplay innovations leveraging PS5's cutting-edge hardware. A dual-mode experience offers the choice between 'Graphic Mode' for stunning 4K visuals and 'Performance Mode' ensuring fluid 60 FPS action. The customizable 'Photo Mode' captures and shares memorable in-game moments. Embark on Yuffie's journey to infiltrate Shinra Corporation, reclaim potent artifacts, and restore glory to her homeland. With new characters, extended gameplay, and optimized loading, FFVII Remake Intergrade promises an unforgettable adventure, catering to both dedicated fans and newcomers alike.",
    poster: "https://s.pacn.ws/1/p/10t/final-fantasy-vii-remake-intergrade-662937.6.jpg?v=qp9r86&width=800&crop=800,999",
    images: [
      "https://s.pacn.ws/1/p/10t/final-fantasy-vii-remake-intergrade-662937.2.jpg?v=qp9r71&width=300&crop=1600,900",
      "https://s.pacn.ws/1/p/10t/final-fantasy-vii-remake-intergrade-662937.3.jpg?v=qp9r71&width=300&crop=1600,900",
      "https://s.pacn.ws/1/p/10t/final-fantasy-vii-remake-intergrade-662937.4.jpg?v=qp9r71&width=300&crop=1280,720",
      "https://s.pacn.ws/1/p/10t/final-fantasy-vii-remake-intergrade-662937.5.jpg?v=qp9r71&width=300&crop=1280,720"
    ]
  },
  {
    id: 27,
    name: "Assassin’s Creed Mirage",
    Platform: "PS4",
    Genre: [
      "Action" , "Adventure"
    ],
    price: 39.99,
    old_price: 59.99,
    description: "Play as a cunning young street thief seeking answers in this majestic Middle Eastern open world.Experience the home of the original Assassins in this exciting new narrative-driven, open world adventure.15 years since the first Assassin’s Creed redefined adventure, experience the franchises’ trademark parkour and stealth like never before – in Assasin’s Creed Mirage.In this smaller scale, back to basics Assassin’s caper, you play Basim, a young street thief seeking answers. Roam the richly-detailed, reactive and vibrant streets of 9th century Baghdad, uncovering the mysteries of the past as you fight to secure your future.Stalk the shadows. Become the ultimate assassin.",
    characteristics: "Characteristics for Game 2",
    poster: "https://i0.wp.com/images.vfl.ru/ii/1696928090/cd438cd8/39032848.jpg?ssl=1",
    images: [
      "https://gmedia.playstation.com/is/image/SIEPDC/assassins-creed-mirage-screenshot-03-en-19oct22?$1600px$",
      "https://gmedia.playstation.com/is/image/SIEPDC/assassins-creed-mirage-screenshot-01-en-19oct22?$1600px$"
    ]
  },
  {
    id: 28,
    name: "EA SPORTS FC 24",
    Platform: "PS4",
    Genre: [
      "Sport"
    ],
    price: 49.99,
    old_price: 69.99,
    description: "A SPORTS FC™ 24 marks the beginning of the future of football. Built on innovation and authenticity, feel closer to the game in the most true-to-football experience yet with the best players from the biggest clubs, leagues and competitions around the globe.Experience unparalleled realism in every match thanks to three cutting-edge technologies: HyperMotionV, PlayStyles optimized by Opta and the enhanced Frostbite™ Engine.With more than 19,000 fully licensed players, 700 teams and 30 leagues including the UEFA Men’s and Women’s Champions League, EA SPORTS FC 24 brings unrivalled authenticity to the pitch.",
    poster: "https://i0.wp.com/images.vfl.ru/ii/1696250976/cac8d0a1/39022607.jpg?ssl=1",
    images: [
      "https://www.afrik-foot.com/wp-content/uploads/2023/07/jaquette-ea-sports-fc-24.jpg.webp", 
      "https://media.wired.com/photos/6516df152a96d14834d98190/master/w_1920,c_limit/EA-FC-Is-Just-FIFA-Culture.jpg", 
      "http://cdn.playmaroc.com/wp-content/uploads/2023/07/ea-sports-fc-24-ps5-2-1024x576.jpg"
    ]
  },
  {
    id: 29,
    name: "God of War Ragnarok",
    Platform: "PS4",
    Genre: [
      "Action"
    ],
    price: 39.99,
    old_price: 49.99,
    description: "From Santa Monica Studio comes the sequel to the critically acclaimed God of War (2018).Join Kratos and Atreus on a mythic journey for answers before Ragnarök arrives. Together, father and son must put everything on the line as they journey to each of the Nine Realms.Throughout stunning mythological landscapes, they’ll face fearsome enemies – from Norse gods to wild beasts – as they prepare for the showdown of their lives.Armed with his trusty weapons of war – including the Leviathan Axe and the Blades of Chaos – Kratos’ deadly skills will be tested like never before as he fights to protect his family. ",
    poster: "https://i0.wp.com/images.vfl.ru/ii/1668003490/1ef4e00b/38638574.jpg?ssl=1",
    images: [
      "https://i0.wp.com/image.api.playstation.com/vulcan/ap/rnd/202207/1117/WERD9QwOeuJ257snQnLhOob8.jpg?w=1600&resize=1600&ssl=1", 
      "https://i0.wp.com/image.api.playstation.com/vulcan/ap/rnd/202207/1117/NbH8trRlNM7tXO8cPm4Bfkew.jpg?w=1600&resize=1600&ssl=1", 
      "https://i0.wp.com/image.api.playstation.com/vulcan/ap/rnd/202207/1117/gjZf7QAeZ195d7KKPVHLM6QU.jpg?w=1600&resize=1600&ssl=1"
    ]
  },
  {
    id: 30,
    name: "Street Fighter 6",
    Platform: "PS4",
    Genre: [
      "Fighting"
    ],
    price: 59.99,
    old_price: 39.99,
    description: "Powered by Capcom’s proprietary RE ENGINE, the Street Fighter 6 experience spans across three distinct game modes featuring World Tour, Fighting Ground and Battle Hub.Diverse Roster of 18 FightersPlay legendary masters and new fan favorites like Ryu, Chun-Li, Luke, Jamie, Kimberly and more in this latest edition with each character featuring striking new redesigns and exhilarating cinematic specials.",
    poster: "https://1.bp.blogspot.com/-CZddmNwsFcI/ZIPCo8ZYiCI/AAAAAAAACGw/yFtVTw5VWF0afMoCopzr0yfH8xW6OGfDQCNcBGAsYHQ/s0/1.jpg",
    images: [
      "https://1.bp.blogspot.com/-ShIT3vaobd4/ZIPCzPTMo1I/AAAAAAAACG0/rlFi4sV558QJyZ7UKK-GWMr4jXCSDu3nQCNcBGAsYHQ/s0/1a.jpg", 
      "https://1.bp.blogspot.com/-1oJiwsMSX64/ZIPCzPPhkzI/AAAAAAAACG4/6kp5q9FZSbEOAbiLTmPdPfG3QtufmtfvgCNcBGAsYHQ/s0/1b.jpg", 
    ]
  },
];
module.exports = games;